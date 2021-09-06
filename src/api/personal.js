import axios from '@/utils/axios';

const personal = {};

/**
 * 登录
 * @param params
 * @returns {*}
 */
personal.login = (params = {}) => {
  return axios.post('/login', params);
};

/**
 * 登出
 * @returns {*}
 */
personal.logout = () => {
  return axios.post('/logout');
};

/**
 * 登录用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
personal.userInfo = () => {
  return axios.get('/user');
};

export default personal;