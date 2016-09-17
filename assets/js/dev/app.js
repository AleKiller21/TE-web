"use strict";
var app = angular.module( 'TEapp', [ 'ngRoute', 'ngCookies', 'ngLoadScript', 'ui.router'] )

	.controller('initCtr', function($scope, $http, config){
	$scope.title = config.title;
});
