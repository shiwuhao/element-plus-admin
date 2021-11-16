import ElementPlus from 'element-plus'
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import 'element-plus/theme-chalk/index.css'

export function setupElementPlus(app) {
  const {getGlobalSize} = useRootSetting();
  app.use(ElementPlus, {zIndex: 3000, size: getGlobalSize.value ? getGlobalSize.value : 'small'})
}
