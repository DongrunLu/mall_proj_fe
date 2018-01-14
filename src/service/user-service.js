/*
* @Author: Ryan
* @Date:   2018-01-14 01:34:52
* @Last Modified by:   Ryan
* @Last Modified time: 2018-01-14 09:57:10
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
	// 检查登陆状态
	checkLogin : function(resolve, reject){
		_mm.request({
			url 	: _mm.getServerUrl('/user/get_user_info.do'),
			method	: 'POST',
			success	: resolve,
			error	: reject
		});
	},
	// 登出
	logout : function(resolve, reject){
		_mm.request({
			url 	: _mm.getServerUrl('/user/logout.do'),
			method 	: 'POST',
			success	: resolve,
			error 	: reject
		});
	}
};

module.exports = _user;