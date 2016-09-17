"use strict";

var app = angular.module('TEapp');

app.controller( 'HomeController', function($scope, config ){
	var vm = this;
	
	vm.data = {
		home:'Clase Virtual Presencial Online',
		classes:[ 
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=1"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=2"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=3"
			},
			{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Creamos Tecnologias Emergentes!",
				link: "/class?id=4"
			}
		]
	};
} );