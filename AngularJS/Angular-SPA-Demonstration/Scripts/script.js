var myApp = angular.module("Demo",["ngRoute"])
            .config(function($routeProvider){
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
                    .otherwise({
                        redirectTo: "/home"
                    })
                    //$locationProvider.html5Mode(true);
            })
            .controller('homeController',function($scope){
                $scope.message="Home Page";
            })
            .controller("coursesController",function($scope){
                var courses=["c#","vb.net","java","javascript","angularjs","python"];
                $scope.courses=courses;
            })
            .controller("studentsController",function($scope){
                var students = ["mark","john","Sar","tom","pam","catherine","mary","mike","rosie","sasile"]; 
                $scope.students=students;
            });
        