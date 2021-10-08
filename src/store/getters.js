const getters = {
  getConfigs: state => state.config.configs,
  getAccessToken: state => state.user.accessToken,
  getUser: state => state.user.user,
  getProjectConfig: state => state.app.projectConfig,
  getPageLoading: state => state.app.pageLoading,
  getMenuSetting: state => state.app.projectConfig.menuSetting,
  getHeaderSetting: state => state.app.projectConfig.headerSetting,
  getTransitionSetting: state => state.app.projectConfig.transitionSetting,
  getTagViewSetting: state => state.app.projectConfig.tagViewSetting,
  getDarkMode: state => state.app.projectConfig.darkMode,
  getCachedViews: state => state.tagView.cachedViews,
  getVisitedViews: state => state.tagView.visitedViews,
  getRoles: state => state.permission.roles,
  getMenus: state => state.permission.menus,
  getActions: state => state.permission.actions,
  getIsLoaded: state => state.permission.isLoaded,
};
export default getters
