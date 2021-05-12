import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import installContentment from './plugins/contextmenu'
import router from './router'
import store from './store'
import '@/mock/index';

const app = createApp(App).use(store).use(router)
installElementPlus(app)
installContentment(app)

import {ProjectConfig} from "@/settings/config";
store.dispatch('app/setProjectConfig',ProjectConfig)

app.mount('#app')