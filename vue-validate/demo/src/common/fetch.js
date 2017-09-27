import axios from 'axios';

function request (method, url, param,  callback) {
    axios({
        method: method || 'post',
        url: url,
        params: method === 'get' ? param : {},
        data: method === 'post' ? param : {},
        timeout: 3000000,
        responseType: 'json',
        baseURL: ''
    }).then(function (response) {
        if (response.data.respCode) {
            if (response.data.respCode != '00' && response.data.respCode != '0') {
                errorCallback(response.data);
            } else {
                callback(response.data.result);
            }
        } else {
            // 任何请求
            callback(response.data);
        }
        
    }).catch(function (error) {
        console.log(error);
      });
}

function errorCallback (data) {
    alert(data.respMsg || '系统异常');
}

export function get(url, params, callback) {
    return request('get', url, params, callback);
}

export function post(url, params, callback) {
    return request('post', url, params, callback);
}