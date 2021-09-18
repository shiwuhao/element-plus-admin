import axios from '@/utils/axios';

// 登录
const login = (params = {}) => {
  return axios.post('/login', params);
};

// 登出
const logout = () => {
  return axios.post('/logout');
};

// 个人信息
const info = () => {
  return axios.get('/personal/info');
};

// 菜单 权限节点
const permissions = () => {
  return axios.get('/personal/permissions');
};

export {
  login,
  logout,
  info,
  permissions,
};