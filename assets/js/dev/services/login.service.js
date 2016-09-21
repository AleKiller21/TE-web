'use strict';

var app = angular.module('TEapp');

app.factory('login', function($http) {
	var url = 'http://server:3000/user/login';

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