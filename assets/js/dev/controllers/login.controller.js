'use strict';

var app = angular.module('TEapp');

app.controller('LoginController', function($rootScope, login) {
	var vm = this;

	vm.username = '';
	vm.password = '';
	vm.login = login;

	logOut();
	//$rootScope.Session = "alejandro.ferrera@unitec.edu";

	function login() {
		
	}


	function loginSuccess(response) {

	}

	function loginFail(response) {

	}

	function logOut() {
		console.log('Adios');
		window.localStorage.removeItem('Session');
		window.localStorage.removeItem('Username');
		$rootScope.Session = '';
	}
});