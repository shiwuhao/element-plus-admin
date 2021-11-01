import {createApp} from 'vue'
import App from './App.vue'
import {setupElementPlus} from './plugins/element'
import {setupContentment} from './plugins/contextmenu'
import {setupEIconPicker} from './plugins/eIconPicker'
import {router, setupRouter} from './router'
import store, {setupStore} from './store'
import {setupRouterGuard} from "@/router/guard";
import SvgIcon from '@/components/Icon/src/IconSvg';
import 'virtual:svg-icons-register';
import {setupGlobalDirectives} from "@/directives";
import {ProjectConfig} from "@/enums/config";
import {registerGlobComp} from "@/components/registerGlobComp";

(async () => {
  const app = createApp(App);

  setupElementPlus(app);

  setupContentment(app);

  setupEIconPicker(app);

  setupStore(app);

  setupRouter(app);

  setupRouterGuard();

  setupGlobalDirectives(app);

  registerGlobComp(app);

  await router.isReady();

  const {getters, dispatch} = store;
  if (!getters.getProjectConfig) {
    await dispatch('app/setProjectConfig', ProjectConfig)
  }

  app.component('svg-icon', SvgIcon)
  app.mount('#app')
})();