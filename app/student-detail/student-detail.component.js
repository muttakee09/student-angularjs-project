'use strict';

function studentDetailController($routeParams, studentService) {
  console.log($routeParams);
  self = this;
  studentService.getStudentDetail($routeParams.studentId).then(response => {
    self.student = response.data
  });
}

studentDetailController.$inject = [
  'studentService'
];

angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: studentDetailController
  });
