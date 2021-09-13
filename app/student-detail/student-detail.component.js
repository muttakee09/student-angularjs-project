'use strict';

function studentDetailController() {
  self = this;
  self.$onInit = function() {
    self.student = self.selectedStudent;
  }

  self.returnToList = function() {
    self.setSelectedStudent({student: null});
    self.changePath({flag: 0});
  }
}

angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'student-detail/student-detail.template.html',
    controller: studentDetailController,
    bindings: {
      changePath: '&',
      setSelectedStudent: '&',
      selectedStudent: '<'
    }
  });
