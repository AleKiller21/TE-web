"use strict";

var app = angular.module('TEapp');

app.controller( 'ClassController', function($stateParams, $state, $rootScope, config, classes) {
	var vm = this;

	vm.classId = $stateParams.classId;
	vm.class = {};
	classes.getClass(vm.classId, getClassSuccess, getClassFail);

	vm.goAccess = goAccess;

	function goAccess() {
		if($rootScope.Role === 1)
			$state.go('access-student', {classId: vm.class._id});

		if($rootScope.Role === 2)
			$state.go('access-professor', {classId: vm.class._id});

		if($rootScope.Role === 3)
			$state.go('access-admin', {classId: vm.class._id});
	}

	function getClassSuccess(response) {
		vm.class = response.data.data;
	}

	function getClassFail(response) {
		console.log(response.data[0]);
	}
});