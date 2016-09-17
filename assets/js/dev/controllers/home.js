"use strict";

var app = angular.module('TEapp');

app.controller( 'HomeController', function($scope, config, $state){
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

	vm.goToClass = goToClass;

	function goToClass(index) {
		$state.go('class', {id: index});
	}
} );