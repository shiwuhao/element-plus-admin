const getters = {
  getAccessToken: state => state.user.access_token,
  getUser: state => state.user.user,
  getProjectConfig: state => state.app.projectConfig,
  getMenuSetting: state => state.app.projectConfig.menuSetting,
  setting: state => state.setting,
  config: state => state.config,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  cachedViews: state => state.tagView.cachedViews,
  visitedViews: state => state.tagView.visitedViews,
  routes: state => state.permission.routes,
  menus: state => state.permission.menus,
  roles: state => state.user.roles,
};
export default getters
