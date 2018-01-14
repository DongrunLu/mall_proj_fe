/*
* @Author: Ryan
* @Date:   2018-01-14 09:26:46
* @Last Modified by:   Ryan
* @Last Modified time: 2018-01-14 09:55:39
*/
'use strict';
require('./index.css');

var _mm 	= require('util/mm.js');

// 通用页面头部
var header = {
	init : function(){
		this.bindEvent();
	},
	// 回填
	onLoad : function(){
		var keyword = _mm.getUrlParam('keyword');
		// keyword 存在，则回填输入框
		if(keyword){
			$('#search-input').val(keyword);
		}
	},
	bindEvent : function(){
		// JQ 的选择器，this不生效，所以要用 var _this = this
		var _this = this;
		// 点击搜索按钮以后，做搜索提交
		$('#search-btn').click(function(){
			_this.searchSubmit();
		});
		// 输入回车后，做搜索提交
		$('#search-input').keyup(function(e){
			// 13 是回车键的 keycode
			if(e.keyCode === 13){
				_this.searchSubmit();
			}
		});
	},
	// 搜索的提交
	searchSubmit : function(){
		var keyword = $.trim($('#search-input').val());
		// 如果提交的时候有 keyword，正常跳转到 list 页
		if(keyword){
			window.location.href = './list.html?keyword=' + keyword;
		} 
		// 如果 keyword 为空，直接返回首页
		else {
			_mm.goHome();
		}
	}
};

// // header 都是内部调用的，不需要输出
header.init();