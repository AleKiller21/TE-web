"use strict";

var app = angular.module('TEapp');

app.controller( 'AccessStudentController', function(config, access, $stateParams, $rootScope) {
	var vm = this;

	vm.credentials = {};
	vm.classId = $stateParams.classId;

	access.getClassCredentials(vm.classId, $rootScope.userId,
		getCredentialsSuccess, getCredentialsFail); 

	function getCredentialsSuccess(response) {

	}

	function getCredentialsFail(response) {
		console.log(response);
	}
});