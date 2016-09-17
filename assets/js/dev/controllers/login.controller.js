'use strict';

var app = angular.module('TEapp');

app.controller('LoginController', function($rootScope, login) {
	var vm = this;

	vm.username = '';
	vm.password = '';
	vm.login = login;

	

	function login() {
		
	}
});