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

// Services
weatherApp.service('cityService', function () {
    this.city = '';
});

// Controllers
weatherApp.controller('homeCtrl', ['$scope', '$log', 'cityService', function ($scope, $log, cityService) {
    $scope.city = cityService.city;
    
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastCtrl', ['$scope', '$log', 'cityService', function ($scope, $log, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    })
}]);