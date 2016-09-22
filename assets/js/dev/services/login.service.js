'use strict';

var app = angular.module('TEapp');

app.factory('loginService', function($http, config) {
	var url = config.server + 'users/login';

	var service = {
		login: login
	};

	return service;

	function login(user, success, fail) {
		$http.post(url, JSON.stringify(user))
			.then(success)
			.catch(fail);
	}
});