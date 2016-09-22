"use strict";

var app = angular.module('TEapp');

app.controller( 'AccessStudentController', function(config, access, $stateParams, $rootScope) {
	var vm = this;

	vm.credentials = {};
	vm.classId = $stateParams.classId;
	vm.postCredentialsRequest = postCredentialsRequest;

	access.getClassCredentials(vm.classId, $rootScope.userId,
		getCredentialsSuccess, getCredentialsFail);

	function postCredentialsRequest() {
		access.postClassRequest(vm.classId, $rootScope.userId,
			postClassSuccess, postClassFail);
	} 

	function getCredentialsSuccess(response) {
		vm.credentials = response.data.data;
	}

	function getCredentialsFail(response) {
		console.log(response);
	}

	function postClassSuccess(response) {

	}

	function postClassFail(response) {
		console.log(response);
	}
});