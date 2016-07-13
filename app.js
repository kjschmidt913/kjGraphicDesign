var app = angular.module('routeEx', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'ViewOne.html',
    controller: 'routeCtrl'
  });
  
  $routeProvider.when('/viewTwo', {
    templateUrl: 'ViewTwo.html',
    controller: 'routeCtrl'
  }).
  
  otherwise({
        redirectTo: '/'
      });
      
  $routeProvider.when('/viewThree', {
    templateUrl: 'viewThree.html',
    controller: 'routeCtrl'
  });
  
  $routeProvider.when('/viewFour', {
    templateUrl: 'viewFour.html',
    controller: 'routeCtrl'
  });
  
});

app.controller('routeCtrl', function(){
  
});
 /*comment*/
 