'use strict';

var app = angular.module('TEapp');

app.factory('access', function($http, config) {
	var url = config.url + 'vclass/access';

	var service = {
		getClassCredentials: getClassCredentials
	};

	return service;

	function getClassCredentials(vclassId, userId, success, fail) {
		$http.get(url, {
			params: {
				userID: userId,
				videoID: vclassId
			}
		}).then(success)
		  .catch(fail);
	}
});