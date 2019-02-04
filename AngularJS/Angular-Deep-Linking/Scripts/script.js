// register this controller with the myapp module 
// the job of the controller is to build the model for the view
var myApp = angular.module("Demo",["ngRoute"])
            .config(function($routeProvider,$locationProvider){
                $locationProvider.html5Mode(true).hashPrefix('!');
                $routeProvider
                    .when("/home",{
                        templateUrl:"Templates/home.html",
                        controller:"homeController"
                    })
                    .when("/courses",{
                        templateUrl:"Templates/courses.html",
                        controller:"coursesController"
                    })
                    .when("/students",{
                        templateUrl:"Templates/students.html",
                        controller:"studentsController"
                    })
                    .when("/students/:id",{
                        templateUrl:"Templates/studentDetails.html",
                        controller:"studentDetailsController"
                    })
                    .otherwise({
                        redirectTo: "/home"
                    });
            })
            .controller('homeController',function($scope){
                $scope.message="Home Page";
            })
            .controller("coursesController",function($scope){
                var courses=["c#","vb.net","java","javascript","angularjs","python"];
                $scope.courses=courses;
            })
            .controller("studentsController",function($scope){
                var students = [
                        {name:"mark",id:"1"},
                        {name:"john",id:"2"},
                        {name:"Sar",id:"3"},
                        {name:"tom",id:"4"},
                        {name:"pam",id:"5"},
                        {name:"catherine",id:"6"},
                        {name:"mary",id:"7"},
                        {name:"mike",id:"8"},
                        {name:"rosie",id:"9"},
                        {name:"sasile",id:"10"}
                    ]; 
                $scope.students=students;
            })
            .controller("studentDetailsController",function($scope,$routeParams){
                $scope.id = $routeParams.id;
            });
            

