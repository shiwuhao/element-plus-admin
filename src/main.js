import {createApp} from 'vue'
import App from './App.vue'
// import {setupElementPlus} from './plugins/element'
import {setupContentment} from './plugins/contextmenu'
import {router, setupRouter} from './router'
import store, {setupStore} from './store'
import {setupRouterGuard} from "@/router/guard";
import {setupGlobalDirectives} from "@/directives";
import {ProjectConfig} from "@/enums/config";
import {registerGlobComp} from "@/components/registerGlobComp";

(async () => {
  const app = createApp(App);

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