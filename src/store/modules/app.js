const app = {
  namespaced: true,
  state: {
    sidebar: {
      collapse: localStorage.getItem('sidebarCollapse') ? !!+localStorage.getItem('sidebarCollapse') : true,
      width: '165px',
      collapseWidth: '65px',
    },
    device: 'desktop',
    size: localStorage.getItem('size') || 'medium',
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.collapse = !state.sidebar.collapse;
      localStorage.setItem('sidebarCollapse', state.sidebar.collapse ? '1' : '0');
    },
    CLOSE_SIDEBAR: state => {
      state.sidebar.collapse = true;
      localStorage.setItem('sidebarCollapse', '1');
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    TOGGLE_SIZE: (state, size) => {
      state.size = size;
      localStorage.setItem('size', size);
    },
  },
  actions: {
    // 收缩菜单
    toggleSideBar({commit}) {
      commit('TOGGLE_SIDEBAR');
    },
    // 关闭菜单
    closeSideBar({commit}) {
      commit('CLOSE_SIDEBAR');
    },
    // 切换设备
    toggleDevice({commit}, device) {
      commit('TOGGLE_DEVICE', device);
    },
    // 切换布局大小
    toggleSize({commit}, size) {
      commit('TOGGLE_SIZE', size);
    },
  }
};
export default app;
