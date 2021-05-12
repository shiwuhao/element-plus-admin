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
      console.log(state.projectConfig);
    }
  },
  actions: {
    setPageLoading(loading) {
      this.pageLoading = loading;
    },
    setDarkMode(mode) {
      this.darkMode = mode;
    },
    setProjectConfig({commit}, projectConfig) {
      commit('setProjectConfig', projectConfig);
    },
  }
};

export default app;