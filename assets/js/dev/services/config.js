'use strict';

var app = angular.module('TEapp');

app.service('config', function() {
    return {
    	title:"CVPO",
    	imgPath:"/assets/img/",
    	url: "http://server:8000/"
    }
});