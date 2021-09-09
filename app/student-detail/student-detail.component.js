'use strict';

function studentDetailController() {
  self = this;
  self.$onInit = function() {
    self.student = self.parent.selectedStudent;
  }
}

angular.
  module('studentDetail').
  component('studentDetail', {
    require: {
      parent: '^main'
    },
    templateUrl: 'student-detail/student-detail.template.html',
    controller: studentDetailController
  });
