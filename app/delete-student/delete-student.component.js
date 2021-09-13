'use strict';

function deleteStudentController(studentService) {
  self = this;
  self.$onInit = function() {
    self.student = self.selectedStudent;
  };

  self.deleteStudent = function() {
    studentService.deleteStudent(self.selectedStudent.Id).then(resp => {
      self.changepath({flag: 0});
    })
  }
}

deleteStudentController.$inject = [
  'studentService'
]

angular.
  module('deleteStudent').
  component('deleteStudent', {
    templateUrl: 'delete-student/delete-student.template.html',
    controller: deleteStudentController,
    bindings: {
      changePath: '&',
      setSelectedStudent: '&',
      selectedStudent: '<'
    }
  });
