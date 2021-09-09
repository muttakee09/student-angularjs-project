'use strict';

function studentListController(studentService) {
  self = this;
  studentService.getStudents().then(function(response) {
    if (response.status === 200) {
      self.students = response.data;
    }
  });
  console.log(self.students);
}

studentListController.$inject = [
  'studentService'
];

angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: studentListController
  });
