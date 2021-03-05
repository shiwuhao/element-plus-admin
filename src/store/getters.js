const getters = {
  setting: state => state.setting,
  config: state => state.config,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  cachedViews: state => state.tagView.cachedViews,
  visitedViews: state => state.tagView.visitedViews,
  routes: state => state.permission.routes,
  menus: state => state.permission.menus,
  user: state => state.user.user,
  roles: state => state.user.roles,
};
export default getters
