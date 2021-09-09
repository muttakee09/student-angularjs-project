'use strict';

function deleteStudentController(studentService) {
  self = this;
  self.$onInit = function() {
    self.student = self.parent.selectedStudent;
  };

  self.deleteStudent = function() {
    studentService.deleteStudent(self.parent.selectedStudent.Id).then(resp => {
      self.parent.changepath(0);
    })
  }
}

deleteStudentController.$inject = [
  'studentService'
]

angular.
  module('deleteStudent').
  component('deleteStudent', {
    require: {
      parent: '^main'
    },
    templateUrl: 'delete-student/delete-student.template.html',
    controller: deleteStudentController
  });
