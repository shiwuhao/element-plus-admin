import users from '@/api/users';
import {setToken, removeToken} from '@/utils/auth';

const user = {
  namespaced: true,
  state: {
    accessToken: '',
    user: null,
    roles: [],
  },
  mutations: {
    SET_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
    },
    SET_USER(state, userInfo) {
      state.user = userInfo;
    },
    SET_ROLES(state, roles) {
      state.roles = roles;
    }
  },
  actions: {
    // 登录
    login({commit}, params) {
      return new Promise((resolve, reject) => {
        users.login(params).then(response => {
          const {data: {access_token}} = response.data;
          setToken(access_token);
          commit('SET_ACCESS_TOKEN', access_token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 登出
    logout({commit}) {
      return new Promise((resolve, reject) => {
        users.logout().then(() => {
          commit('SET_ACCESS_TOKEN', '');
          commit('SET_ROLES', []);
          commit('SET_USER', {});
          removeToken();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 获取用户信息
    getUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        users.userInfo().then(response => {
          const {data: {user, roles}} = response.data;
          commit('SET_USER', user);// 设置用户信息
          commit('SET_ROLES', roles);// 设置权限
          resolve(response.data.data);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default user;
