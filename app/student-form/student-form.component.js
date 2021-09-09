'use strict';

function studentFormController(studentService) {
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
    self = this;
    self.$onInit = function () {
        studentService.getCourses().then(response => {
            if (response.status === 200) {
                self.courseList = response.data;
            }
        });
        self.bloodGroupItems = bloodGroupItems;
        self.studentName = "";
        self.age = "";
        self.bloodGroup = "";
        self.image = null;
        self.gender = '0';
        self.mainCourse = null;
        self.supplementaryCourse = null;
        if (self.parent.selectedStudent !== null) {
            const response = self.parent.selectedStudent;
            self.studentName = response.StudentName;
            self.age = response.Age;
            self.bloodGroup = String(response.BloodGroup);
            self.image = response.Image;
            self.gender = String(response.Gender);
            self.mainCourse = response.MainCourse;
            self.supplementaryCourse = response.SupplementaryCourse;
        }
    }
    
    self.removeImage = function() {
        console.log("removed");
        self.image = null;
    }

    self.submitStudentForm = function() {
        const formdata = new FormData();
        formdata.append("StudentName", self.studentName);
        formdata.append("Age", self.age);
        formdata.append("BloodGroup", Number(self.bloodGroup));
        formdata.append("Gender", Number(self.gender));
        formdata.append("Image", self.image);
        formdata.append("MainCourse", self.mainCourse);
        formdata.append("SupplementaryCourse", self.supplementaryCourse);
        
        if (self.parent.selectedStudent) {
            studentService.updateStudent(self.parent.selectedStudent.Id, formdata).then((resp) => {
                console.log('come on');
                self.parent.changePath(0);
                self.parent.setSelectedStudent(null);
            });
        }
        else {
            studentService.createStudent(formdata).then((resp) => {
                self.parent.changePath(0);
            });
        }
    }
  }

studentFormController.$inject = [
    'studentService', 
];
  

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
   require: {
        parent: '^main'
    },
   templateUrl: 'student-form/student-form.template.html',
   controller: studentFormController
 });