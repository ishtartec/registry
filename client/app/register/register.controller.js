'use strict';

angular.module('registroApp')
  .controller('RegisterCtrl', function ($scope, courseid, $location, courseService) {

    $scope.courseid = courseid.id;
    if ($scope.courseid === '') {
      $location.path('/');
    }

    $scope.course = courseService.get({id: $scope.courseid}, function() {
      //socket.syncUpdates('curso', $scope.curso);
      console.log('Curso: ' + JSON.stringify($scope.course));
    });

    $scope.studentSave = function () {
      //console.log('Student: ' + JSON.stringify($scope.student));
      $scope.course.students.push($scope.student);
      console.log('Student: ' + JSON.stringify($scope.course.students));
      courseService.update({id: $scope.course._id}, $scope.course,
        function () {
          alert('Datos registrados correctamente');
          $location.path('/');
        });
    };

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.openNacimiento = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.openedNacimiento = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd/MM/yyyy','dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

  });
