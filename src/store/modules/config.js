import {useFetchItemList} from "@/api/useConfigRequest";

const config = {
  namespaced: true,
  state: {
    config: {},
  },
  mutations: {
    setConfig(state, config) {
      state.config = config;
    },
  },
  actions: {
    setConfigItem({commit}) {
      const {data,getConfigList} = useFetchItemList();
      console.log(data.value,getConfigList());
      commit('setConfig', data.value);
    }
  }
};
export default config;
