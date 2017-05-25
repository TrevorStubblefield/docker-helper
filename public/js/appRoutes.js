var app = angular.module('appRoutes', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/containers', {
            templateUrl: 'views/containers.html',
            controller: 'ContainersController'
        })

        .when('/dockerfiles', {
            templateUrl: 'views/dockerfiles.html',
            controller: 'DockerfileController'
        })

        .when('/dockerhub', {
            templateUrl: 'views/dockerhub.html',
            controller: 'DockerhubController'
        })
        
        .when('/images', {
            templateUrl: 'views/images.html',
            controller: 'ImagesController'
        });

    $locationProvider.html5Mode(true);
}]);