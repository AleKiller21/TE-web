'use strict';

var app = angular.module('TEapp');

app.run(function($rootScope) {
	$rootScope.sessionActive = false;
});