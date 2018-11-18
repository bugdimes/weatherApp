// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


// Routes
weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastCtrl'
        });
});

// Controllers
weatherApp.controller('homeCtrl', ['$scope', function ($scope) {

}]);

weatherApp.controller('forecastCtrl', ['$scope', function ($scope) {

}]);