import {computed, unref} from 'vue'
import store from "@/store/index.js";
import {useMenuSetting} from "@/composables/setting/useMenuSeeting.js";
import {useWindowSize} from "@vueuse/core";
import {useTagViewSetting} from "@/composables/setting/useTagViewSeeting.js";


export function useRootSetting() {

  const {dispatch, getters} = store;
  const getProjectConfig = computed(() => getters.getProjectConfig);
  const {getEnableTagView} = useTagViewSetting();
  const {setMenuSetting} = useMenuSetting();

  const getIsMobile = computed(() => {
    const {width} = useWindowSize();
    return width.value <= 992;
  });

  // 主题模式
  const getDarkMode = computed(() => unref(getProjectConfig).darkMode);

  // 导航模式
  const getIsMixMode = computed(() => getNavbarMode.value === 'mix');
  const getIsSidebarMode = computed(() => getNavbarMode.value === 'sidebar');
  const getIsTopMenuMode = computed(() => getNavbarMode.value === 'top-menu');

  // 内容显示
  const getShowLogo = computed(() => unref(getProjectConfig).showLogo);
  const getShowBreadcrumb = computed(() => unref(getProjectConfig).showBreadcrumb && !unref(getIsMobile) && !unref(getIsTopMenuMode));
  const getShowSettingDrawer = computed(() => unref(getProjectConfig).showSettingDrawer);
  const getShowHeaderLogo = computed(() => !unref(getIsSidebarMode) && unref(getShowLogo) && !unref(getIsMobile));
  const getShowSidebarLogo = computed(() => getIsSidebarMode.value && getShowLogo.value);
  const getShowTagView = computed(() => unref(getEnableTagView) && (unref(getIsTopMenuMode) || unref(getIsSidebarMode)) && !unref(getIsMobile));
  const getShowHeaderTrigger = computed(() => !unref(getIsTopMenuMode));
  const getGlobalSize = computed(() => unref(getProjectConfig).size);

  // 动画
  const getNavbarMode = computed(() => unref(getProjectConfig).navbarMode);
  const getPageLoading = computed(() => getters.getPageLoading);
  const getOpenKeepAlive = computed(() => unref(getProjectConfig).openKeepAlive);


  /**
   * 项目设置
   * @param rootSetting
   */
  async function setRootSetting(rootSetting) {
    await dispatch('app/setProjectConfig', rootSetting);
  }

  /**
   * toggle logo
   * @returns {Promise<void>}
   */
  async function toggleLogo() {
    await setRootSetting({showLogo: !unref(getShowLogo)});
  }

  /**
   * toggle breadcrumb
   * @returns {Promise<void>}
   */
  async function toggleBreadcrumb() {
    await setRootSetting({showBreadcrumb: !unref(getShowBreadcrumb)});
  }

  /**
   * open settingDrawer
   * @returns {Promise<void>}
   */
  async function openSettingDrawer() {
    await setRootSetting({showSettingDrawer: true});
  }

  /**
   * close settingDrawer
   * @returns {Promise<void>}
   */
  async function closedSettingDrawer() {
    await setRootSetting({showSettingDrawer: false});
  }

  /**
   * 切换导航栏模式
   * @param mode top-menu,side-menu,mix-menu
   * @returns {Promise<void>}
   */
  async function toggleNavbarMode(mode) {
    const menuMode = mode === 'top-menu' ? 'horizontal' : 'vertical';
    await setRootSetting({navbarMode: mode});

    await setMenuSetting({mode: menuMode});
  }

  /**
   * 切换布局大小
   * @param size
   * @returns {Promise<void>}
   */
  async function toggleElementSize(size) {
    await setRootSetting({size: size});
  }


  return {
    toggleLogo,
    toggleBreadcrumb,
    toggleNavbarMode,
    openSettingDrawer,
    closedSettingDrawer,
    toggleElementSize,
    getDarkMode,
    getNavbarMode,
    getShowLogo,
    getShowBreadcrumb,
    getShowSettingDrawer,
    getShowHeaderLogo,
    getShowSidebarLogo,
    getShowTagView,
    getShowHeaderTrigger,
    getIsSidebarMode,
    getIsMixMode,
    getIsTopMenuMode,
    getIsMobile,
    getPageLoading,
    getOpenKeepAlive,
    getGlobalSize,
  };
}