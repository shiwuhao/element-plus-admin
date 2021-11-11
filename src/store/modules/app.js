const app = {
  namespaced: true,
  state: {
    darkMode: undefined,
    pageLoading: false,
    projectConfig: undefined,
  },
  mutations: {
    setProjectConfig: (state, projectConfig) => {
      state.projectConfig = {...state.projectConfig, ...projectConfig};
    },
    setPageLoading(state, loading) {
      state.pageLoading = loading;
    }
  },
  actions: {
    setPageLoading({commit}, loading) {
      commit('setPageLoading', loading);
    },
    setDarkMode({commit},mode) {
      commit('darkMode', mode);
    },
    setProjectConfig({commit}, projectConfig) {
      commit('setProjectConfig', projectConfig);
    },
  }
};

export default app;