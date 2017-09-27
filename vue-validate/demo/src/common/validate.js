import Vue from 'vue';
// import lodash from 'lodash';
import moment from 'moment';
export default {
	install() {

		// 范围检测 0-99
		Vue.prototype.rangeCheck = function(rule, value, cb) {
			if (!/^[1-9][0-9]{0,1}$/.test(value)) {
				return cb(new Error('在0-99之间'));
			}
			return cb();
		};

		// 时间戳转换
		Vue.prototype.formatDate = function(time, spec) {
			if (!spec) {
				return moment(time).format('YYYY-MM-DD');
			}
		};

		
	}
};
