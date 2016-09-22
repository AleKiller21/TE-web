'use strict';

var app = angular.module('TEapp');

app.controller('LoginController', function($rootScope, $state, loginService) {
	var vm = this;

	vm.user = {
		email: '',
		password: ''
	}

	vm.login = login;

	logOut();

	function login() {
		loginService.login(vm.user, loginSuccess, loginFail);
	}


	function loginSuccess(response) {
		window.localStorage['Session'] 
			= $rootScope.Session 
			= response.data.email;

		window.localStorage['Role']
			= $rootScope.Role
			= response.data.role;

		window.localStorage['UserId']
			= $rootScope.UserId
			= response.data._id;

		$state.go('home');
	}

	function loginFail(response) {
		console.log(response);
	}

	function logOut() {
		console.log('Adios');
		window.localStorage.removeItem('Session');
		window.localStorage.removeItem('Username');
		window.localStorage.removeItem('UserId');
		$rootScope.Session = '';
		$rootScope.Role = '';
		$rootScope.UserId = 0;
	}
});