'use strict';

angular.module('registroApp')
  .factory('courseService',['$resource', function ($resource) {
    return $resource('api/courses/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'details': {method:'GET', params:{id:'date'}, isArray:true},
      'update': { method: 'PUT'},
      'delete': { method: 'DELETE'}
    });
  }]);
