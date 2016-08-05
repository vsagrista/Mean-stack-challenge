'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.alerts = [
      {
        icon:'glyphicon glyphicon-user',
        color:'btn btn-success',
        total:'20,408',
        description:'TOTAL COSTUMERS'
      },
      {
        icon:'glyphicon glyphicon-calendar',
        color:'btn btn-primary',
        total:'8,382',
        description:'UPCOMING EVENTS'
      },
      {
        icon:'glyphicon glyphicon-edit',
        color:'btn btn-success',
        total:'527',
        description:'NEW COSTUMERS IN 24H'
      },
      {
        icon:'glyphicon glyphicon-record',
        color:'btn btn-info',
        total:'85,000',
        description:'EMAILS SENT'
      },
      {
        icon:'glyphicon glyphicon-eye-open',
        color:'btn btn-warning',
        total:'268',
        description:'FOLLOW UPS REQUESTED'
      },
      {
        icon:'glyphicon glyphicon-flag',
        color:'btn btn-danger',
        total:'364',
        description:'REFERRALS TO MODERATE'
      }
    ];
  }
]);
