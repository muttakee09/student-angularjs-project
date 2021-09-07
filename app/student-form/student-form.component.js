'use strict';

angular.
  module('studentForm').
  directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function() {
             scope.$apply(function() {
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]).
 component('studentForm', {
   templateUrl: 'student-form/student-form.template.html',
   controller: ['$routeParams', '$window', 'Student', 'Course',
       function StudentFormController($routeParams, $window, Student, Course) {
       const bloodGroupItems = [
   {
       id: 0,
       name: "A+"
   },
   {
       id: 1,
       name: "B+"
   },
   {
       id: 2,
       name: "AB+"
   },
   {
       id: 3,
       name: "O+"
   },
   {
       id: 4,
       name: "A-"
   },
   {
       id: 5,
       name: "B-"
   },
   {
       id: 6,
       name: "AB-"
   },
   {
       id: 7,
       name: "O-"
   },
]
       this.courseList = Course.query();
       this.bloodGroupItems = bloodGroupItems;
       this.studentName = "";
       this.age = "";
       this.bloodGroup = "";
       this.image = null;
       this.gender = '0';
       this.mainCourse = null;
       this.supplementaryCourse = null;
       // this.phones = Phone.query();
       if (typeof $routeParams.studentId !== 'undefined') {
           Student.get($routeParams,  (response) => {
               console.log(response);
               this.studentName = response.StudentName;
               this.age = response.Age;
               this.bloodGroup = String(response.BloodGroup);
               this.image = response.Image;
               this.gender = String(response.Gender);
               this.mainCourse = response.MainCourse;
               this.supplementaryCourse = response.SupplementaryCourse;
             });
       }

       this.removeImage = function() {
           console.log("removed");
           this.image = null;
       }

       this.submitStudentForm = function() {
           const formdata = new FormData();
           formdata.append("StudentName", this.studentName);
           formdata.append("Age", this.age);
           formdata.append("BloodGroup", Number(this.bloodGroup));
           formdata.append("Gender", Number(this.gender));
           formdata.append("Image", this.image);
           formdata.append("MainCourse", this.mainCourse);
           formdata.append("SupplementaryCourse", this.supplementaryCourse);
           
           if (typeof $routeParams.studentId !== 'undefined') {
            //    student = {...student, Id: $routeParams.studentId};
               Student.put($routeParams, formdata, function(resp) {
               $window.history.back();
               });
           }
           else {
               Student.post(formdata, function(resp) {
               $window.history.back();
               });
           }
       }

     }
   ]
 });