(function () {
  'use strict';

  angular
    .module('customers')
    .controller('CustomersListController', CustomersListController);

  CustomersListController.$inject = ['CustomersService', '$log', '$modal', '$scope'];

  function CustomersListController(CustomersService, $log, $modal, $scope) {
    var vm = this;
    
    vm.customers = CustomersService.query();
    vm.modalUpdate = modalUpdate;

    // Update costumer modal
    
    function modalUpdate(size, selectedCostumer) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'modules/customers/client/views/modal-customer.client.view.html',
        controller: function ($scope, $modalInstance, customer){
          $scope.customer = customer;
        },
        size: size,
        resolve: {
          customer: function () {
            return selectedCostumer;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }
  }
})();
