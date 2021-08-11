import {useAxios} from './useAxios';


export function useConfigRequest(funcName, params) {
  /**
   *
   * @param params
   * @returns {*}
   */
  function index(params = {}) {
    return useAxios('/configs', {params, method: 'GET'});
  }

  /**
   *
   * @param id
   * @returns {*}
   */
  const show = (id) => {
    return useAxios(`/configs/${id}`, {method: 'GET'});
  }

  /**
   *
   * @param params
   * @returns {*}
   */
  const store = (params) => {
    return useAxios('/configs', {data: params, method: 'POST'});
  }

  /**
   *
   * @param params
   * @returns {*}
   */
  const update = (params) => {
    return useAxios(`/configs/${params.id}`, {data: params, method: 'PUT'});
  }

  /**
   *
   * @param id
   * @returns {*}
   */
  const destroy = (id) => {
    return useAxios(`/configs/${id}`, {method: 'delete'});
  }

  if (typeof (eval(funcName)) == "function") {
    return eval(funcName + "();");
  }
}