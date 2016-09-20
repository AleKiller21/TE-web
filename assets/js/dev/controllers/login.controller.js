'use strict';

var app = angular.module('TEapp');

app.controller('LoginController', function($rootScope, login) {
	var vm = this;

	vm.user = {
		user: '',
		password: ''
	}

	vm.login = login;

	logOut();

	function login() {
		login.login(vm.user, loginSuccess, loginFail);
	}


	function loginSuccess(response) {
		window.localStorage['Session'] 
			= $rootScope.Session 
			= response.email;

		window.localStorage['Role']
			= $rootScope.Role
			= response.role;
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