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
    self.parent.setSelectedStudent(student);
    self.parent.changePath(1);
    console.log('dhur');
  }

  self.toDeletePage = function(student) {
    self.parent.setSelectedStudent(student);
    self.parent.changePath(3);
  }

  self.toUpdatePage = function(student) {
    self.parent.setSelectedStudent(student);
    self.parent.changePath(2);
  }
}

studentListController.$inject = [
  'studentService'
];

angular.
  module('studentList').
  component('studentList', {
    require: {
      parent: '^main'
    },
    templateUrl: 'student-list/student-list.template.html',
    controller: studentListController,
    bindings: {
    }
  });
