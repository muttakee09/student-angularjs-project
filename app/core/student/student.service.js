'use strict';

function studentService($http) {
  this.getStudents = function () {
    return $http({
      method: 'GET',
      url: 'https://localhost:44318/api/Student/'
    });
  }
  this.getStudentDetail = function (studentId) {
    return $http({
      method: 'GET',
      url: `https://localhost:44318/api/Student/${studentId}`
    });
  }
  this.createStudent = function (data) {
    return $http({
      method: 'POST',
      url: 'https://localhost:44318/api/Student/',
      data: data
    });
  }
  this.updateStudent = function (data) {
    return $http({
      method: 'PUT',
      url: 'https://localhost:44318/api/Student/:studentId',
      data: data
    });
  }
  this.deleteStudent = function () {
    return $http({
      method: 'DELETE',
      url: 'https://localhost:44318/api/Student/:studentId'
    });
  }
  
  this.getCourses = function () {
    return $http({
      method: 'GET',
      url: 'https://localhost:44318/api/Course'
    })
  }
}
studentService.$inject = [
  '$http'
];
angular
  .module('core.student')
  .service('studentService', studentService);
