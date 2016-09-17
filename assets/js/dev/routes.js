"use strict";

var app = angular.module('TEapp');

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/home',
                controller: 'HomeController as vm'
            })

            .state('class', {
                url: '/class',
                templateUrl: '/views/class',
                controller: 'ClassController as vm'
            })

            .state('access', {
                url: '/access',
                templateUrl: '/views/access',
                controller: 'AccessController as vm'
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