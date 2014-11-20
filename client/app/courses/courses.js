'use strict';

angular.module('registroApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('courses', {
        url: '/courses',
        templateUrl: 'app/courses/courses.html',
        controller: 'CoursesCtrl'
      });
  });