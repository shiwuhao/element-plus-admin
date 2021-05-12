/**
 * 菜单设置
 * @type {{mode: string, backgroundColor: string, router: boolean, bgColor: string, activeTextColor: string, uniqueOpened: boolean, textColor: string, collapse: boolean, menuTrigger: string, collapseTransition: boolean}}
 */
export const MenuSetting = {
  mode: 'vertical',
  collapse: false,
  backgroundColor: 'white',
  textColor: '#303133',
  activeTextColor: '#409EFF',
  uniqueOpened: false,
  menuTrigger: 'hover',
  router: false,
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
 * 项目配置
 * @type {{menuSetting: {mode: string, backgroundColor: string, router: boolean, bgColor: string, activeTextColor: string, uniqueOpened: boolean, textColor: string, collapse: boolean, menuTrigger: string, collapseTransition: boolean}}}
 */
export const ProjectConfig = {
  menuSetting: MenuSetting,
  headerSetting: HeaderSetting,
  showLogo: true,
}
