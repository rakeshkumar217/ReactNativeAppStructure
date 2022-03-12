/*
 * @file: RestClient.js
 * @description: Promise based fetch methods for api calls
 * @date: 23th September 2019
 * @author: Rakesh
 */

import axios from 'axios';

// Rest api methods class
class RestClient {
	static get(url, params) {
		let data = {
			params: params
		};
		return new Promise(function(fulfill, reject) {
		axios
			.get("https://google.com/" + url, data)
			.then(function(response) {
				fulfill(response);
			})
			.catch(function(error) {
				reject(error);
			});
		});
	}
}

export default RestClient;
