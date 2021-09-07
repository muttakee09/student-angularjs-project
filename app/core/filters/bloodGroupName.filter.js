'use strict';

angular.
  module('core').
  filter('bloodGroupName', function() {
    return function(input) {
      if (input === 0) {
        return 'A+';
      }
      else if (input === 1) {
        return 'B+';
      }
      else if (input === 2) {
        return 'AB+';
      }
      else if (input === 3) {
        return 'O+';
      }
      else if (input === 4) {
        return 'A-';
      }
      else if (input === 5) {
        return 'B-';
      }
      else if (input === 6) {
        return 'AB-';
      }
      else {
        return 'O-';
      }
    };
  });
