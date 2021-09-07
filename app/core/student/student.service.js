'use strict';

angular.
  module('core.student').
  factory('Student', ['$resource',
    function($resource) {
      return $resource('https://localhost:44318/api/Student/:studentId/', {}, {
        query: {
          method: 'GET',
          isArray: true
        },
        get: {
          method: 'GET'
        },
        getDetails: {
          method: 'GET',
          params:{detailFlag: 'details'}
        },
        post: {
          method: 'POST',
          headers: {
            "Content-Type": undefined
          }
        },
        put: {
          method: 'PUT',
          headers: {
            "Content-Type": undefined
          }
        },
        delete: {
          method: 'DELETE'
        },
        options: {
          method: 'OPTIONS'
        }
      });
    },
  ]);
