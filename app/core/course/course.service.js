'use strict';

angular.
  module('core.course').
  factory('Course', ['$resource',
    function($resource) {
      return $resource('https://localhost:44318/api/Course/:courseId', {}, {
        query: {
          method: 'GET',
          isArray: true
        },
        get: {
          method: 'GET'
        }
      });
    },
  ]);
