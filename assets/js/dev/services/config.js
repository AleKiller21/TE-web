'use strict';

var app = angular.module('TEapp');

app.service('config', function() {
    return {
    	title:"CVPO",
    	imgPath:"/assets/img/",
    	server: "http://220ab4a5.ngrok.io/"
    }
});