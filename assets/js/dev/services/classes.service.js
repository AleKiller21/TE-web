'use strict';

var app = angular.module('TEapp');

app.factory('classes', function($http, config) {
	var url = config.url + 'vclass';

	var service = {
		getClasses: getClasses
	};

	return service;

	function getClasses(success, fail) {
		$http.get(url).then(success).catch(fail);
	}
});