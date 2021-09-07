'use strict';

angular.
  module('deleteStudent').
  component('deleteStudent', {
    templateUrl: 'delete-student/delete-student.template.html',
    controller: ['$routeParams', '$window', 'Student',
      function DeleteStudentController($routeParams, $window, Student) {
        this.orderProp = 'age';
        this.student = Student.get($routeParams);
        this.deleteStudent = function() {
          Student.delete($routeParams, function(resp){
            console.log(resp)//whatever logic you want in here 
            $window.history.back();

          });
        };
      }
    ]
  });
