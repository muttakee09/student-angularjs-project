'use strict';

function mainFunction () {
  var self = this;
  self.$onInit= function() {
    self.pathFlag = 0;
  }
  console.log(self.pathFlag);
}

self.changePath = function(flag) {
  self.pathFlag = flag;
}

angular.
  module('main').
  component('main', {
    templateUrl: 'main.template.html',
    controller: mainFunction,
    controllerAs: 'ctrl',
    bindings: {
      changePath: '='
      }
    }
  )