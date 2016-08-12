"use strict";

app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : '/views/home',
                controller  : 'homeCtrl'
            }).when('/class', {
                templateUrl : '/views/class',
                controller  : 'classCtrl'
            }).when('/access', {
                templateUrl : '/views/access',
                controller  : 'accessCtrl'
            }).when('/404', {
                templateUrl : '/views/404'
            }).otherwise({ redirectTo: '/404' });

            // to remove the # in the url uncomment this
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    });