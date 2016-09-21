"use strict";

var app = angular.module('TEapp');

app.controller( 'HomeController', function(config, $state, classes){
	var vm = this;
	
	vm.data = {
		home:'Clase Virtual Presencial Online',
		classes:[ 
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!"
			}
		]
	};

	//classes.getClasses(getClassesSuccess, getClassesFail);;

	vm.goToClass = goToClass;

	function goToClass(index) {
		$state.go('class', {classId: index});
		//$state.go('class', {classId: vm.data.classes[index]._id});
	}

	function getClassesSuccess(response) {
		for(let vclass in response.data) {
			vm.data.classes.push(response.data[vclass]);
		}
	}

	function getClassesFail(response) {
		console.log(response.data[0]);
	}

} );