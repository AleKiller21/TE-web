'use strict';

var app = angular.module('TEapp');

app.run(function($rootScope) {
	$rootScope.Session = window.localStorage['Session'];
	$rootScope.Username = window.localStorage['Username'];
});