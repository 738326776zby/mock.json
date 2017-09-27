// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import validate from './common/validate';
import * as filters from './filters/filter.js';

import store from './store/index.js'
Vue.use(ElementUI);
Vue.use(validate);

// 保留几位小数
// Vue.directive('saveDec', function(a, dec) {
// 	let input = a.getElementsByTagName('input')[0];
// 	input.onblur = function() {
// 		input.value = Number(input.value).toFixed(dec.expression);	
// 	};
// });

//循环遍历所有过滤器
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
