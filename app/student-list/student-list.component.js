'use strict';

function studentListController(studentService) {
  self = this;

  self.$onInit = function() {
    studentService.getStudents().then(function(response) {
      if (response.status === 200) {
        self.students = response.data;
      }
    });
  }

  self.toDetailPage = function(student) {
    self.setSelectedStudent({student: student});
    self.changePath({flag: 1});
    console.log('dhur');
  }

  self.toDeletePage = function(student) {
    self.setSelectedStudent({student: student});
    self.changePath({flag: 3});
  }

  self.toUpdatePage = function(student) {
    self.setSelectedStudent({student: student});
    self.changePath({flag: 2});
  }
}

studentListController.$inject = [
  'studentService'
];

angular.
  module('studentList').
  component('studentList', {
    templateUrl: 'student-list/student-list.template.html',
    controller: studentListController,
    bindings: {
      changePath: '&',
      setSelectedStudent: '&'
  },
  });
