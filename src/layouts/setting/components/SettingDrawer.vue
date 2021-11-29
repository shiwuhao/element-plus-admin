<template>
  <div class="container">
    <el-drawer
      :model-value="getShowSettingDrawer"
      direction="rtl"
      :size="260"
      :with-header="false"
      :show-close="false"
      :append-to-body="true"
      @closed="closedSettingDrawer"
    >
      <el-scrollbar height="100vh">
        <div class="drawer-container">
          <div class="setting-group">
            <h3 class="setting-title">导航栏模式</h3>
            <div class="flex-row">
              <el-tooltip v-for="(item,index) in navbarModes"
                          :key="index"
                          effect="dark"
                          :content="item.title"
                          placement="top-start">
                <div class="setting-item" @click="toggleNavbarMode(item.type)">
                  <img :src="item.img"/>
                  <i class="el-icon-check" v-if="item.type === getNavbarMode"/>
                </div>
              </el-tooltip>
            </div>
          </div>
          <el-divider/>

          <div class="setting-group">
            <h3 class="setting-title">内容区域</h3>
            <div>
              <div class="drawer-item">
                <span>dark</span>
                <el-switch :model-value="dark" class="drawer-switch" @change="toggleDark"/>
              </div>
              <div class="drawer-item">
                <span>Tag视图</span>
                <el-switch :model-value="getEnableTagView" class="drawer-switch" @change="toggleEnableTagView"/>
              </div>

              <div class="drawer-item">
                <span>固定Header</span>
                <el-switch :model-value="getHeaderFixed" class="drawer-switch" @change="toggleHeaderFixed"/>
              </div>

              <div class="drawer-item">
                <span>侧边栏Logo</span>
                <el-switch :model-value="getShowLogo" class="drawer-switch" @change="toggleLogo"/>
              </div>
              <div class="drawer-item">
                <span>面包屑导航</span>
                <el-switch :model-value="getShowBreadcrumb" class="drawer-switch" @change="toggleBreadcrumb"/>
              </div>
              <div class="drawer-item">
                <span>布局大小</span>
                <el-select :model-value="getGlobalSize" size="mini" style="width: 120px"
                           @change="toggleElementSize($event)">
                  <el-option v-for="item in getElementSizeOptions"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="setting-group">
            <h3 class="setting-title">动画</h3>
            <div>
              <div class="drawer-item">
                <span>顶部进度条</span>
                <el-switch :model-value="getOpenNProgress" class="drawer-switch" @change="toggleOpenNProgress"/>
              </div>
              <div class="drawer-item">
                <span>切换Loading</span>
                <el-switch :model-value="getOpenPageLoading" class="drawer-switch" @change="toggleOpenPageLoading"/>
              </div>
              <div class="drawer-item">
                <span>切换动画</span>
                <el-switch :model-value="getEnableTransition" class="drawer-switch" @change="toggleEnableTransition"/>
              </div>
              <div class="drawer-item">
                <span>动画类型</span>
                <el-select :model-value="getBasicTransition" size="mini" style="width: 120px"
                           @change="setBasicTransition($event)">
                  <el-option v-for="item in getRouterTransitionOptions"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>
<script>
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
import {useHeaderSetting} from "@/composables/setting/useHeaderSeeting.js";
import {useTransitionSetting} from "@/composables/setting/useTransitionSeeting.js";
import {useTagViewSetting} from "@/composables/setting/useTagViewSeeting.js";
import {useDark, useToggle} from '@vueuse/core'
import {elementSizeOptions, routerTransitionOptions} from '@/enums/appEnum.js'
import {ref} from "vue";
import {getCurrentInstance} from "vue";
import {useRouter} from "vue-router";

export default {
  name: 'setting',
  props: ['theme'],
  data() {
    return {
      color1: '',
      selectedMenuTheme: 'dark',
      dark: '',
      navbarModes: [
        {
          mode: 'light',
          type: 'sidebar',
          title: '左侧菜单模式',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
        },
        {
          mode: 'dark',
          type: 'mix',
          title: '顶部菜单混合模式',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
        },
        {
          mode: 'other',
          type: 'top-menu',
          title: '顶部菜单模式',
          img: 'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
        }
      ],

    }
  },
  setup() {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    const {
      getShowLogo,
      getShowBreadcrumb,
      getShowSettingDrawer,
      getDarkMode,
      getNavbarMode,
      getGlobalSize,
      closedSettingDrawer,
      toggleLogo,
      toggleBreadcrumb,
      toggleNavbarMode,
      toggleElementSize: changeSize,
    } = useRootSetting();

    const {getHeaderFixed, toggleHeaderFixed} = useHeaderSetting();
    const {
      getOpenNProgress,
      toggleOpenNProgress,
      getOpenPageLoading,
      toggleOpenPageLoading,
      getEnableTransition,
      toggleEnableTransition,
      setBasicTransition,
      getBasicTransition,
    } = useTransitionSetting();

    const {appContext} = getCurrentInstance()
    const {replace, currentRoute} = useRouter()

    const toggleElementSize = (size) => {
      console.log(appContext.config)
      appContext.config.globalProperties.$ELEMENT.size = size
      changeSize(size)
      const {fullPath} = currentRoute.value;
      replace({path: '/redirect/' + fullPath})
    }

    const {getEnableTagView, toggleEnableTagView} = useTagViewSetting();
    const getRouterTransitionOptions = ref(routerTransitionOptions);
    const getElementSizeOptions = ref(elementSizeOptions);
    return {
      getShowLogo,
      getShowBreadcrumb,
      getShowSettingDrawer,
      getDarkMode,
      getNavbarMode,
      getGlobalSize,
      closedSettingDrawer,
      toggleElementSize,
      toggleLogo,
      toggleBreadcrumb,
      toggleNavbarMode,
      toggleDark,
      getHeaderFixed,
      toggleHeaderFixed,
      getOpenNProgress,
      toggleOpenNProgress,
      getOpenPageLoading,
      toggleOpenPageLoading,
      getEnableTransition,
      toggleEnableTransition,
      getEnableTagView,
      toggleEnableTagView,
      getRouterTransitionOptions,
      getElementSizeOptions,
      setBasicTransition,
      getBasicTransition
    }
  },
};
</script>
<style lang="scss" scoped>
.drawer-container {
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .setting-group {
    .setting-title {
      font-size: 14px;
      color: rgba(0, 0, 0, .85);
    }

    .setting-item {
      position: relative;
      margin-right: 16px;
      cursor: pointer;

      img {
        width: 48px;
      }

      i.el-icon-check {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        color: #1890ff;
        font-size: 16px;
        font-weight: bolder;
      }
    }

    .color-block {
      width: 20px;
      height: 20px;
      border-radius: 2px;
      float: left;
      cursor: pointer;
      margin-right: 8px;
      padding-left: 0px;
      padding-right: 0px;
      text-align: center;
      color: #fff;
      font-weight: 700;

      i.el-icon-check {
        font-size: 14px;
      }
    }
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

</style>