const config = {
  namespaced: true,
  state: {
    configs: {},
  },
  mutations: {
    setConfig(state, configs) {
      state.configs = configs;
    },
  },
};
export default config;
