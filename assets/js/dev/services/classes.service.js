'use strict';

var app = angular.module('TEapp');

app.factory('classes', function($http, config) {
	var url = config.server + 'vclass';

	var service = {
		getClasses: getClasses,
		getClass: getClass
	};

	return service;

	function getClasses(success, fail) {
		$http.get(url).then(success).catch(fail);
	}

	function getClass(classId, success, fail) {
		$http.get(url + '/' + classId).then(success)
		  .catch(fail);
	}
});