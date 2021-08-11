import axios from 'axios'
import { useAxios as useAxiosRequest} from '@vueuse/integrations'
import Qs from "qs";
import {getToken} from "@/utils/auth";

const instance = axios.create({
  baseURL: 'http://element-plus-admin.local/backend',
  headers: {Accept: 'text/json'},
})

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

  return Promise.reject(err)
});

export function useAxios(url, config) {
  return useAxiosRequest(url, config, instance);
}