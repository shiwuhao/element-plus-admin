import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from "./getters"


// module
const modules = {};
const moduleFiles = import.meta.globEager('./modules/*.js');
Object.keys(moduleFiles).forEach((key) => {
  const moduleName = key.slice(key.lastIndexOf('/') + 1, -3);
  modules[moduleName] = moduleFiles[key].default;
});

// vuex plugin
const localStoragePlugin = createPersistedState({
  storage: localStorage,
  paths: ['setting', 'config', 'app', 'tagView']
});

// vuex plugin
const sessionStoragePlugin = createPersistedState({
  storage: sessionStorage,
  paths: ['user.accessToken',]
});

const store = createStore({
  plugins: [localStoragePlugin, sessionStoragePlugin],
  modules: modules,
  getters: getters,
})

export function setupStore(app) {
  app.use(store);
}

export default store;