import {createFetch} from "@vueuse/core";
import store from "@/store";
import {unref} from "vue";
import {isObject} from "@/utils/is.js";
import utils from "@/utils/utils.js";

/**
 * 生成路径参数url
 * @param url
 * @param params
 * @returns {*}
 */
const buildPathParamsUrl = (url, params) => {
  return url.replace(/:(\w+)/g, (_, key) => params[key])
}

/**
 * 生成header
 * @param options
 * @returns {*&{Accept: string}}
 */
const buildHeaders = (options) => {
  const headers = {...options.headers, Accept: 'text/json'};
  const token = store.getters.getAccessToken;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

/**
 * 生成url
 * @param url
 * @param options
 * @returns {*}
 */
const buildUrl = ({url, options}) => {

  const {method, payload} = options;
  let _url = unref(url), _payload = unref(payload);
  if (method.toLocaleLowerCase() === 'get' && _payload) {
    _url += '?' + (isObject(_payload) ? utils.queryParams(_payload) : _payload);
  }

  return buildPathParamsUrl(_url, _payload);
}

const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  options: {
    async beforeFetch({url, options}) {
      const _url = buildUrl({url, options});
      options.headers = buildHeaders(options);

      return {options, url: _url}
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

export default useFetch;