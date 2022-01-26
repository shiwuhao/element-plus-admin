import {createFetch} from "@vueuse/core";
import store from "@/store";
import utils from "@/utils/utils.js";

/**
 * 生成header
 * @param headers
 * @returns {*&{Accept: string}}
 */
const buildHeaders = (headers) => {
  headers = {...headers, Accept: 'text/json'};
  const token = store.getters.getAccessToken;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

/**
 * 生成url
 * 替换url中的路径参数，并删除payload中的路径惨
 * @param url
 * @param options
 * @returns {*}
 */
const buildUrl = ({url, method, payload}) => {
  url = url.replace(/:(\w+)/g, (_, key) => {
    const _t = payload[key];
    delete payload[key];
    return _t;
  });
  if (method.toLocaleLowerCase() === 'get' && Object.keys(payload).length > 0) {
    url += '?' + utils.queryParams(payload);
  }
  return url;
}

const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  options: {
    async beforeFetch(e) {
      console.log(e);
      let {url, options} = e;
      let {method, payload, headers} = options;
      // url = buildUrl({url, method, payload});
      headers = buildHeaders(headers);
      return {url, options: {headers, payload, method}}
    },
    // async afterFetch(e) {
    //   console.log('after',e)
    //   return e;
    // }
  },
  fetchOptions: {
    mode: 'cors',
  },
})

export default useFetch;