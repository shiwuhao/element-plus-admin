import {createApp} from 'vue'
import App from './App.vue'
// import {setupElementPlus} from './plugins/element'
import {setupContentment} from './plugins/contextmenu.js'
import {router, setupRouter} from './router/index.js'
import store, {setupStore} from './store/index.js'
import {setupRouterGuard} from "@/router/guard/index.js";
import {setupGlobalDirectives} from "@/directives/index.js";
import {ProjectConfig} from "@/enums/config.js";
import {registerGlobComp} from "@/components/registerGlobComp.js";

(async () => {
  const app = createApp(App);

  app.config.globalProperties.$ELEMENT = {size: 'small', zIndex: 3000}

  const {getters, dispatch} = store;
  if (!getters.getProjectConfig) {
    await dispatch('app/setProjectConfig', ProjectConfig)
  }

  setupStore(app);

  setupRouter(app);

  setupRouterGuard();

  // setupElementPlus(app);

  setupContentment(app);

  setupGlobalDirectives(app);

  registerGlobComp(app);

  await router.isReady();

  app.mount('#app')
})();