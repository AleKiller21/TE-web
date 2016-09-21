'use strict';

var app = angular.module('TEapp');

app.service('config', function() {
    return {
    	title:"CVPO",
    	imgPath:"/assets/img/",
    	server: "http://22ad799e.ngrok.io:8000/"
    }
});