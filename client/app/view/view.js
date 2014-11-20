'use strict';

angular.module('registroApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view', {
        url: '/view',
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl'
      });
  });