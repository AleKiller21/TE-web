'use strict';

var app = angular.module('TEapp');

app.factory('login', function($http) {
	var url = '';

	var service = {
		login: login
	};

	return service;

	function login(user, success, fail) {
		$http.post(JSON.stringify(user))
			.then(success)
			.catch(fail);
	}
});