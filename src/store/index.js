import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from "./getters"

import setting from "./modules/setting";
import config from "./modules/config";
import app from "./modules/app";
import tagView from "./modules/tagView";
import permission from "./modules/permission";
import user from "./modules/user";

const store = createStore({
  plugins: [createPersistedState({
    paths: [
      // 'setting',
      // 'config',
      // 'app',
      'user.accessToken',
      // 'tagView',
      // 'permission.menus',
      // 'permission.routes',
      // 'permission.addRoutes'
    ]
  })],
  modules: {
    setting, config, app, tagView, permission, user
  },
  getters: getters,
})

export function setupStore(app) {
  app.use(store);
}

export default store;