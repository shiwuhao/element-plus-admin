const setting = {
  namespaced: true,
  state: {
    layout: localStorage.getItem('layout') ? localStorage.getItem('layout') : 'sideMenu',
    primaryColor: localStorage.getItem('primaryColor') ? localStorage.getItem('primaryColor') : '#409EFF',
    tagView: localStorage.getItem('tagView') ? !!+localStorage.getItem('tagView') : true,
    fixedHeader: localStorage.getItem('fixedHeader') ? !!+localStorage.getItem('fixedHeader') : true,
    sidebarLogo: localStorage.getItem('sidebarLogo') ? !!+localStorage.getItem('sidebarLogo') : true,
    navBar: localStorage.getItem('navBar') ? !!+localStorage.getItem('navBar') : true,
  },
  mutations: {
    CHANGE_SETTING: (state, data) => {
      for (let key in data) {
        if (Object.prototype.hasOwnProperty.call(state, key)) {
          state[key] = data[key];
          localStorage.setItem(key, state[key]);
        }
      }
    },
    TOGGLE_SETTING: (state, key) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = !state[key];
        localStorage.setItem(key, state[key] ? '1' : '0');
      }
    },
  },
  actions: {
    /**
     * change setting
     * @param commit
     * @param data
     */
    changeSetting({commit}, data) {
      commit('CHANGE_SETTING', data)
    },
    /**
     * toggle setting
     * @param commit
     * @param key
     */
    toggleSetting({commit}, key) {
      commit('TOGGLE_SETTING', key);
    },
  }
};
export default setting;
