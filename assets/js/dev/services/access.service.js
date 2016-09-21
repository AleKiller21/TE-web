'use strict';

var app = angular.module('TEapp');

app.factory('access', function($http, config) {
	var url = config.server + 'vclass/access';

	var service = {
		getClassCredentials: getClassCredentials,
		postClassRequest: postClassRequest
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

	function postClassRequest(vclassId, userId, success, fail) {
		let data = {
			userID: userId,
			videoID: vclassId
		};

		$http.post(url, JSON.stringify(data))
			.then(success)
			.catch(fail);
	}
});