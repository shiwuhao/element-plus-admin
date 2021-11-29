import {createApp} from 'vue'
import App from '@/App.vue'
import {setupElementPlus} from '@/plugins/element'
import {setupContentment} from '@/plugins/contextmenu.js'
import {router, setupRouter} from '@/router/index.js'
import {setupStore} from '@/store/index.js'
import {setupRouterGuard} from "@/router/guard/index.js";
import {setupGlobalDirectives} from "@/directives/index.js";
import {registerGlobComp} from "@/components/registerGlobComp.js";


(async () => {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  setupRouterGuard();

  setupContentment(app);

  setupGlobalDirectives(app);

  registerGlobComp(app);

  await setupElementPlus(app);

  await router.isReady();

  app.mount('#app')
})();