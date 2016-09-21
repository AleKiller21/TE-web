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
		$rootScope.Role = 'student';
		$state.go('home');
		console.log('Adelante');
		//login.login(vm.user, loginSuccess, loginFail);
	}


	function loginSuccess(response) {
		window.localStorage['Session'] 
			= $rootScope.Session 
			= response.data[0].email;

		window.localStorage['Role']
			= $rootScope.Role
			= response.data[0].role;

		window.localStorage['UserId']
			= $rootScope.UserId
			= response.data[0]._id;

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