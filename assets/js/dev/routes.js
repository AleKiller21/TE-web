"use strict";

var app = angular.module('TEapp');

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: '/views/login',
                controller: 'LoginController as vm'
            })
            
            .state('home', {
                url: '/home',
                templateUrl: '/views/home',
                controller: 'HomeController as vm'
            })

            .state('class', {
                url: '/class/{id}',
                templateUrl: '/views/class',
                controller: 'ClassController as vm'
            })

            .state('access-student', {
                url: '/access/{id}',
                templateUrl: '/views/access-student',
                controller: 'AccessStudentController as vm'
            })

            .state('404', {
                url: '/404',
                templateUrl: '/views/404',

            });

        $urlRouterProvider.otherwise('/404');

            // to remove the # in the url uncomment this
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    });