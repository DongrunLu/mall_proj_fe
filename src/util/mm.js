/*
* @Author: Ryan
* @Date:   2018-01-13 19:02:18
* @Last Modified by:   Ryan
* @Last Modified time: 2018-01-13 20:47:55
*/

'use strict';

var Hogan = require('hogan');
var conf = {
	serverHost : ''
};
var _mm = {
	// 网络请求
	request : function(param){
		var _this = this;
		$.ajax({
			type		: param.method 		|| 'get',
			url			: param.url			|| '',
			dataType	: param.type 		|| 'json',
			data 		: param.data 		|| '',
			success 	: function(res){
				// 请求成功
				if(0 === res.status){
					typeof param.success === 'function' && param.success(res.data, res.msg);
				}
				// 没有登陆轧辊台，需要强制登陆
				else if(10 === res.status){
					_this.doLogin();
				}
				// 请求数据错误
				else if(1 === res.status){
					typeof param.error === 'function' && param.error(res.msg);
				}
			},
			erro		: function(err){
				typeof param.error === 'function' && param.error(err.statusText);
			}
		})
	},
	// 获取服务器地址
	getServerUrl : function(path){
		return conf.serverHost + path;
	},
	// 获取 url 参数
	getUrlParam : function(name){
		var reg 	= new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result 	= window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	renderHtml : function(htmlTemplate, data){
		// 先编译，后渲染
		var template = Hogan.compile(htmlTemplate),
			result = template.render(data);
		return result;
	},
	// 登陆成功提示
	successTips : function(msg){
		alert(msg || '操作成功！');
	},
	// 登陆失败提示
	errorTips : function(msg){
		alert(msg || '哪里不对了～');
	},
	// 验证表单提示，支持非空、手机、邮箱
	validate : function(value, type){
		// 去掉前后空格，并且把其他类型的数据转换成字符串类型
		var value = $.trim(value);
		// require: 必须的字段
		if('require' === type){
			// 将 value 强制转换成 boolean 型
			return !!value;
		}
		// 手机号验证
		if('phone' === type){
			return /^1\d{10}$/.test(value);
		}
		// 邮箱格式验证
		if('email' === type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		}
	},
	// 统一登陆处理
	doLogin : function(){
		window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
	},
	goHome : function(){
		window.location.href = './index.html';
	}

};

module.exports = _mm;
























