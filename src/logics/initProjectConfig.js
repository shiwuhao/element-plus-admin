import store from "@/store";
import {ProjectConfig} from "@/settings/config";


export function initProjectConfig() {
  if (!store.getters.getProjectConfig) {
    store.dispatch('app/setProjectConfig', ProjectConfig)
  }
  store.dispatch('config/setConfigItem');
}