import axios from 'axios';
import Qs from 'qs';
import store from "@/store";
import {ElMessage} from "element-plus";

import {router} from "@/router";

const handleParamInUrl = (url, params) => {
  return url.replace(/:(\w+)/g, (_, key) => {
    const _p = params[key];
    delete params[key];
    return _p;
  })
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {Accept: 'text/json'},
})

// 请求拦截
instance.interceptors.request.use(function (config) {

  // config.url = handleParamInUrl(config.url, config.params);
  if (config.method === "post") {
    config.data = Qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  const {getters} = store;
  if (getters.getAccessToken) {
    config.headers['Authorization'] = 'Bearer ' + getters.getAccessToken;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use((response) => {

  return response;
}, (err) => {
  const {response: {status, data: {message}}, config: {url}} = err;
  let noticeConfig = {};
  let _message = message;

  switch (status) {
    case 400:
      break;
    case 403:
      noticeConfig = {title: 403, desc: err.response.data.message, duration: 0};
      break;
    case 401:
      if (url.indexOf('login') === -1) {
        router.push({name: 'login'});
      }
      break;
    case 404:
      _message = 'Not Found';
      break;
    case 422:
      _message = '表单验证失败'
      noticeConfig = {title: '', desc: message.join('<br/>')};
      break;
    default:
      _message = message;
  }

  if (_message) {
    console.log(status,_message)
    ElMessage.error(_message)
  }

  return Promise.reject(err)
});

export default instance;
