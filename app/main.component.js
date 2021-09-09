'use strict';

function mainFunction () {
  var self = this;
  self.$onInit= function() {
    self.pathFlag = 0;
    self.selectedStudent = null;
  }

  self.changePath = function(flag) {
    console.log(flag);
    self.pathFlag = flag;
  }
  
  self.setSelectedStudent = function(student) {
    self.selectedStudent = student;
    console.log(self.selectedStudent);
  }  
}

angular.
  module('main').
  component('main', {
    templateUrl: 'main.template.html',
    controller: mainFunction,
    controllerAs: 'ctrl',
    bindings: {
      }
    }
  )