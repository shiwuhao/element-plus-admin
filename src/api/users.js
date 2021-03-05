import axios from '@/utils/axios';

const users = {};

/**
 * 登录
 * @param params
 * @returns {*}
 */
users.login = (params = {}) => {
  return axios.post('/api/login', params);
};

/**
 * 登出
 * @returns {*}
 */
users.logout = () => {
  return axios.post('/api/logout');
};

/**
 * 登录用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
users.userInfo = () => {
  return axios.get('/api/user-info');
};


users.index = (params) => {
  return axios.get('/api/users');
}
export default users;