'use strict';

angular.module('registroApp')
  .controller('CoursesCtrl', function ($scope, courseService, socket, $modal, $location, courseid) {

    $scope.courses = courseService.query(function() {
      socket.syncUpdates('course', $scope.courses);
    });
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('course');
    });

    $scope.deleteCourse = function (id) {
      courseService.delete({id: id});
    };

    $scope.viewCourse = function(id) {
      courseid.id = id;
      $location.path('/view');
    };

    $scope.open = function (size, course) {

      var modalInstance = $modal.open({
        templateUrl: 'courseTemplate.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          course: function () {
            return course;
          }
        }
      });

      modalInstance.result.then(function (course) {
        //$scope.selected = selectedItem;
        //console.log(JSON.stringify(course));
        if (course._id) {
          courseService.update({id: course._id}, course,
            function () {

            });
        } else {
          delete course._id;
          courseService.save(course,
            function () {

            });
        }
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };


  });

angular.module('registroApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, course) {
  if (typeof course !== 'undefined') {
    $scope.course = course;
  }
  $scope.ok = function () {
    $modalInstance.close($scope.course);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
