import store from "@/store";
import {ProjectConfig} from "@/enums/config.js";


export function initProjectConfig() {
  if (!store.getters.getProjectConfig) {
    store.dispatch('app/setProjectConfig', ProjectConfig)
  }
}