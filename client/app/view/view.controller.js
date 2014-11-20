'use strict';

angular.module('registroApp')
  .controller('ViewCtrl', function ($scope, courseid, $location, courseService) {
    $scope.courseid = courseid.id;
    if ($scope.courseid === '') {
      $location.path('/');
    }

    $scope.course = courseService.get({id: $scope.courseid}, function() {
      //socket.syncUpdates('curso', $scope.curso);
      //console.log('Curso: ' + JSON.stringify($scope.course));
    });

    $scope.exportData = function () {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, $scope.course.name + "_report.xls");
    };

  });
