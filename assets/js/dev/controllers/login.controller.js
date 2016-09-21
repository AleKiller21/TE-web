'use strict';

var app = angular.module('TEapp');

app.controller('LoginController', function($rootScope, $state, login) {
	var vm = this;

	vm.user = {
		Email: '',
		Password: ''
	}

	vm.login = login;

	logOut();

	function login() {
		$rootScope.Session = 'alejandro.ferrera@unitec.edu';
		$state.go('home');
		console.log('Adelante');
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
		console.log(response);
	}

	function logOut() {
		window.localStorage.removeItem('Session');
		window.localStorage.removeItem('Username');
		$rootScope.Session = '';
		$rootScope.Role = '';
	}
});