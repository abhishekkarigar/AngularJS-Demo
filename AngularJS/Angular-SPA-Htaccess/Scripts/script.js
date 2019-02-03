var myApp = angular.module("Demo",["ngRoute"])
            .config(function($routeProvider,$locationProvider){
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
                    });
                    $locationProvider.html5Mode(true);
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
        

// register this controller with the myapp module 
// the job of the controller is to build the model for the view



    
    /*
    $http({
            method:'GET',
            url:'./index.php'
    }).then(function (response){
        $scope.data = response.data
        $scope.headers = response.headers();
        $scope.status = response.status;
        $scope.statustext = response.statusText;
    }
    );
    */
/*
    var employees = [
        {name:"Ben",gender:"Male",salary:12000,city:"London"},
        {name:"Sara",gender:"Female",salary:10000,city:"Chennai"},
        {name:"Mark",gender:"Male",salary:50000,city:"London"},
        {name:"Pam",gender:"Female",salary:6000,city:"Thennai"},
        {name:"Todd",gender:"Male",salary:7000,city:"London"},
        {name:"Shweta",gender:"female",salary:7945,city:"Bronson"},
        {name:"tornam",gender:"male",salary:7945,city:"Bronson"}
    ];

    $scope.employees=employees;
    
  */  
    /*var employee = {
        name:"abhishek",
        lastname:"karigar",
        gender:"male"
    };
    $scope.employee=employee;
   
}); */

/*myApp.controller("akController",function($scope){
    var address = {
        phone:"12345",
        country:"india",
        region:"karnataka"
    };
    $scope.address = address;

})*/
