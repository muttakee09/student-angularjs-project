'use strict';

angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$routeParams', 'Student',
      function StudentDetailController($routeParams, Student) {
        console.log($routeParams);
        this.student = Student.get($routeParams);
      }
    ]
  });
