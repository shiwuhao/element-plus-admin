import {createApp} from 'vue'
import App from './App.vue'
import {setupElementPlus} from './plugins/element'
import {setupContentment} from './plugins/contextmenu'
import {setupEIconPicker} from './plugins/eIconPicker'
import {router,setupRouter} from './router'
import {setupStore} from './store'
// import '@/mock/index';
import {setupRouterGuard} from "@/router/guard";
import {initProjectConfig} from "@/logics/initProjectConfig";
import SvgIcon from '@/components/SvgIcon/SvgIcon';
import 'virtual:svg-icons-register';
import {setupGlobalDirectives} from "@/directives";

(async () => {
  const app = createApp(App);

  setupElementPlus(app);

  setupContentment(app);

  setupEIconPicker(app);

  setupStore(app);

  initProjectConfig();

  setupRouter(app);

  setupRouterGuard();

  setupGlobalDirectives(app);

  await router.isReady();
  app.component('svg-icon',SvgIcon)
  app.mount('#app')
})();