var app = angular.module('appRoutes', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })
    .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataController'
    });

    $locationProvider.html5Mode(true);
}]);