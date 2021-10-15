import * as personal from '@/api/personal';

const user = {
  namespaced: true,
  state: {
    accessToken: undefined,
    user: undefined,
    roles: undefined,
  },
  mutations: {
    setAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setRoles: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    async setToken({commit}, accessToken) {
      await commit('setAccessToken', accessToken);
    },
    async login({commit}, params) {
      const {data: {data}} = await personal.login(params);
      commit('setAccessToken', data.access_token);
      return data;
    },
    async logout({commit}) {
      await personal.logout();
      commit('setAccessToken', undefined);
      commit('setUser', undefined);
    },
    async getUserInfo({commit}) {
      const {data: {data}} = await personal.info();
      commit('setUser', data);
      return data;
    },
  }
};
export default user;
