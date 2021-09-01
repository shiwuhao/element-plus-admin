import personal from '@/api/personal';

const user = {
  namespaced: true,
  state: {
    accessToken: undefined,
    user: undefined,
    roles: undefined,
  },
  mutations: {
    setAccessToken: (state, accessToken) => {
      state.access_token = accessToken;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setRoles: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
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
      const {data: {data}} = await personal.userInfo();
      commit('setUser', data.user);
      commit('setRoles', data.roles);
      return data;
    },
  }
};
export default user;
