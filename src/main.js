import {createApp} from 'vue'
import App from './App.vue'
import {setupElementPlus} from './plugins/element'
import {setupContentment} from './plugins/contextmenu'
import {setupEIconPicker} from './plugins/eIconPicker'
import {setupRouter} from './router'
import {setupStore} from './store'
// import '@/mock/index';
import {setupRouterGuard} from "@/router/guard";
import {initProjectConfig} from "@/logics/initProjectConfig";
import SvgIcon from '@/components/SvgIcon/SvgIcon';

(async () => {
  const app = createApp(App);

  setupElementPlus(app);

  setupContentment(app);

  setupEIconPicker(app);

  setupStore(app);

  initProjectConfig();

  setupRouter(app);

  setupRouterGuard();

  // await router.isReady();

  app.mount('#app')
  app.component('svg-icon',SvgIcon)
})();