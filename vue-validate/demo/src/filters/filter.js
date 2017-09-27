import _ from 'lodash';

// 千分位展示金额
export const formatMoney = (num) => {
	if (num || num == '0') {
		num = parseFloat(num, 10);
		return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
	} else {
		return '';
	}
};

// 千分位并保留几位小数
export const formatCurrency = (s, n) => {
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
	var l = s.split('.')[0].split('').reverse(),
		r = s.split('.')[1];
	var t = '';
	for (var i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
	}
	return t.split('').reverse().join('') + '.' + r;
};
