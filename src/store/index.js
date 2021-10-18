import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import CircularJSON from 'circular-json'
import getters from "./getters"

import setting from "./modules/setting";
import config from "./modules/config";
import app from "./modules/app";
import tagView from "./modules/tagView";
import permission from "./modules/permission";
import user from "./modules/user";

const store = createStore({
  plugins: [createPersistedState({
    // storage: {
    //   getItem: (key) => {
    //       let  aa =CircularJSON.parse(localStorage.getItem(key));
    //       return aa;
    //   },
    //   setItem: (key, value) => {
    //     localStorage.setItem(key, CircularJSON.stringify(value));
    //   },
    //   removeItem: (key) => {
    //     localStorage.removeItem(key);
    //   }
    // },
    paths: [
      'setting',
      'config',
      'app',
      'user.accessToken',
      'tagView',
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