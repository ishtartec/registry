'use strict';

angular.module('registroApp')
  .controller('MainCtrl', function ($scope, $http, socket, courseService, courseid, $location) {

    $scope.errors = {};

    $scope.courses = courseService.query(function() {
      socket.syncUpdates('course', $scope.courses);
    });
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('course');
    });

    $scope.startRegister = function() {
      if ( $scope.selectedCourse.password === $scope.selectedPassword ) {
        //console.log('Correct password');
        courseid.id = $scope.selectedCourse._id;
        $location.path('/register');
      } else {
        $scope.errors.other = 'La clave proporcionada no es válida';
      }
    };
  });
