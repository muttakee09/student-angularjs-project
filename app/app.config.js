'use strict';

angular.
  module('studentApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/students', {
          template: '<student-list></student-list>'
        }).
        when('/details/:studentId', {
          template: '<student-detail></student-detail>'
        }).
        when('/create', {
          template: '<student-form></student-form>'
        }).
        when('/update/:studentId', {
          template: '<student-form></student-form>'
        }).
        when('/delete/:studentId', {
          template: '<delete-student></delete-student>'
        }).
        otherwise('/students');
    }
  ]);
