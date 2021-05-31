const getters = {
  getAccessToken: state => state.user.access_token,
  getUser: state => state.user.user,
  getRoles: state => state.user.roles,
  getProjectConfig: state => state.app.projectConfig,
  getPageLoading: state => state.app.pageLoading,
  getMenuSetting: state => state.app.projectConfig.menuSetting,
  getHeaderSetting: state => state.app.projectConfig.headerSetting,
  getTransitionSetting: state => state.app.projectConfig.transitionSetting,
  getTagViewSetting: state => state.app.projectConfig.tagViewSetting,
  getDarkMode: state => state.app.projectConfig.darkMode,
  getCachedViews: state => state.tagView.cachedViews,
  getVisitedViews: state => state.tagView.visitedViews,
  getMenus: state => state.permission.menus,
};
export default getters
