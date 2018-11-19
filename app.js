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
    this.city = 'London';
});

// Controllers
weatherApp.controller('homeCtrl', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
    
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    })
}]);

weatherApp.controller('forecastCtrl', ['$scope', '$resource', 'cityService', function ($scope, $resource, cityService) {
    $scope.city = cityService.city;

    $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"}, {get: { method: 'JSONP' }});
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, appid: '886705b4c1182eb1c69f28eb8c520e20', cnt: 3 });

    $scope.convertToC = function(degK){
        return degK - 273.15;
    };

    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    };
}]);