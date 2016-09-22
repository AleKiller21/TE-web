"use strict";

var app = angular.module('TEapp');

app.controller( 'HomeController', function(config, $state, classes){
	var vm = this;

	vm.data = {
		home:'Clase Virtual Presencial Online',
		classes:[]
	};

	classes.getClasses(getClassesSuccess, getClassesFail);;

	vm.goToClass = goToClass;

	function goToClass(index) {
		$state.go('class', {classId: vm.data.classes[index]._id});
	}

	function getClassesSuccess(response) {
		for(let vclass in response.data.data) {
			response.data.data[vclass].previewImg = config.imgPath + response.data.data[vclass].previewImg;
			vm.data.classes.push(response.data.data[vclass]);
		}
	}

	function getClassesFail(response) {
		//console.log(response.data[0]);
	}

} );