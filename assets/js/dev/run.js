'use strict';

var app = angular.module('TEapp');

app.run(function($rootScope) {
	$rootScope.Session = window.localStorage['Session'];
	$rootScope.Username = window.localStorage['Username'];
	$rootScope.Role = window.localStorage['Role'];
	$rootScope.UserId = window.localStorage['UserId'];

	// $rootScope.$on('$locationChangeStart', function(event, next, current) {
	// 	console.log(next);
	// });
});