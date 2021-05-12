import users from '@/api/users';

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
      const {data: {data}} = await users.login(params);
      commit('setAccessToken', data.access_token);
      return data;
    },
    async logout({commit}) {
      await users.logout();
      commit('setAccessToken', undefined);
      commit('setUser', undefined);
    },
    async getUserInfo({commit}) {
      const {data: {data}} = await users.userInfo();
      commit('setUser', data.user);
      commit('setRoles', data.roles);
      return data;
    },
  }
};
export default user;
