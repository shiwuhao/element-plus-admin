import 'element-plus/es/components/slider/style/css'
import store from '@/store/index.js'
import {ProjectConfig} from "@/enums/config.js";

const setupProjectConfig = async () => {
  const {getters, dispatch} = store;
  if (!getters.getProjectConfig) {
    await dispatch('app/setProjectConfig', ProjectConfig)
  }
}

export async function setupElementPlus(app) {
  await setupProjectConfig();
  const size = store.getters.getProjectConfig.size ?? 'small';
  app.config.globalProperties.$ELEMENT = {size: size, zIndex: 3000}
}
