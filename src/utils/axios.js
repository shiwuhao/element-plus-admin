import axios from 'axios';
import Qs from 'qs';
import {getToken} from '@/utils/auth';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {Accept: 'text/json'},
});

// 请求拦截
instance.interceptors.request.use(function (config) {


  if (config.method === "post") {
    config.data = Qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  if (getToken()) {
    config.headers['Authorization'] = 'Bearer ' + getToken();
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use((response) => {


  return response;
}, (err) => {

  if (err && err.response) {

    let message = [];
    let noticeConfig = {};

    switch (err.response.status) {
      case 400:
        break;
      case 403:
        noticeConfig = {title: 403, desc: err.response.data.message, duration: 0};
        break;
      case 401:
        if (err.config.url.indexOf('login') > 0) {
          noticeConfig = {title: 401, desc: err.response.data.message, duration: 0};
        }
        break;
      case 404:
        noticeConfig = {title: 404, desc: err.response.data.message, duration: 0};
        break;
      case 422:

        noticeConfig = {title: '表单验证失败', desc: message.join('<br/>')};
        break;
      default:
        noticeConfig = {title: err.response.status, desc: err.response.data.message};
    }
  }
  return Promise.reject(err)
});

export default instance;
