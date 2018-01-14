/*
* @Author: Ryan
* @Date:   2018-01-14 12:42:05
* @Last Modified by:   Ryan
* @Last Modified time: 2018-01-14 12:57:58
*/

'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type		 = _mm.getUrlParam('type') || 'default',
		$element 	 = $('.' + type + '-success');
	// 显示对应的提示元素
	$element.show();


});