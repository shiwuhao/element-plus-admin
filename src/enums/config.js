/**
 * 菜单设置
 * @type {{mode: string, backgroundColor: string, router: boolean, bgColor: string, activeTextColor: string, uniqueOpened: boolean, textColor: string, collapse: boolean, menuTrigger: string, collapseTransition: boolean}}
 */
export const MenuSetting = {
  mode: 'vertical',
  collapse: false,
  backgroundColor: '#222d32',
  textColor: '#fff',
  activeTextColor: '#409EFF',
  uniqueOpened: true,
  menuTrigger: 'hover',
  router: true,
  collapseTransition: true,
}

/**
 * 顶栏设置
 * @type {{showFullScreen: boolean, bgColor: string, showSearch: boolean, show: boolean, useLockPage: boolean, fixed: boolean, theme: string, showNotice: boolean}}
 */
export const HeaderSetting = {
  bgColor: 'white',
  fixed: false,
  show: true,
  theme: 'light',
  showFullScreen: true,
  useLockPage: false,
  showNotice: true,
  showSearch: false,
};

/**
 * 动画设置
 * @type {{openPageLoading: boolean, enable: boolean, openNProgress: boolean, basicTransition: string}}
 */
export const transitionSetting = {
  enable: true,
  basicTransition: 'fade',
  openPageLoading: true,
  openNProgress: true,
}

export const tagViewSetting = {
  enable: true,
}

/**
 * 项目配置
 * @type {{menuSetting: {mode: string, backgroundColor: string, router: boolean, bgColor: string, activeTextColor: string, uniqueOpened: boolean, textColor: string, collapse: boolean, menuTrigger: string, collapseTransition: boolean}}}
 */
export const ProjectConfig = {
  menuSetting: MenuSetting,
  headerSetting: HeaderSetting,
  transitionSetting: transitionSetting,
  tagViewSetting: tagViewSetting,
  darkMode: 'light',
  navbarMode: 'sidebar',
  showLogo: true,
  showBreadcrumb: true,
  showSettingDrawer: false,
  openKeepAlive: false,
  size: 'default',
}
