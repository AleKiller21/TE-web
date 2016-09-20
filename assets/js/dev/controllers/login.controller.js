'use strict';

var app = angular.module('TEapp');

app.controller('LoginController', function($rootScope, $state, login) {
	var vm = this;

	vm.user = {
		user: '',
		password: ''
	}

	vm.login = login;

	logOut();

	function login() {
		console.log(vm.user);
		$rootScope.Session = 'alejandro.ferrera@unitec.edu';
		$state.go('home');
		//login.login(vm.user, loginSuccess, loginFail);
	}


	function loginSuccess(response) {
		window.localStorage['Session'] 
			= $rootScope.Session 
			= response.email;

		window.localStorage['Role']
			= $rootScope.Role
			= response.role;

		$state.go('home');
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