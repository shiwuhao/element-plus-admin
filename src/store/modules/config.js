import {useFetchItemList} from "@/api/useConfigRequest";

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
  actions: {
    setConfigItem({commit}) {
      const {data,getConfigList} = useFetchItemList();
      commit('setConfig', data.value);
    }
  }
};
export default config;
