<template>
  <el-menu class="menu-container" v-bind="menuSetting" :default-active="defaultActive">
    <SidebarLogo class="logo" v-if="getShowSidebarLogo"/>
    <sub-menu v-for="menu in getMenus" :index="menu.path" :key="menu.path" :menu="menu"/>
  </el-menu>
</template>
<script>
import SubMenu from "@/layouts/menu/SubMenu.vue";
import SidebarLogo from "@/layouts/menu/SidebarLogo.vue";
import {useMenuSetting} from "@/composables/setting/useMenuSeeting.js";
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
import {useLayoutMenus} from "@/layouts/menu/useLayoutMenus.js";
import {computed} from "vue";
import {useRouter} from 'vue-router';

export default {
  name: 'LayoutMenu',
  components: {SubMenu, SidebarLogo},
  setup() {
    const {currentRoute} = useRouter();
    const {getMenuSetting} = useMenuSetting();

    const defaultActive = computed(() => {
      const {meta, path} = currentRoute.value;
      return meta && meta['activeMenu'] ? meta['activeMenu'] : path;
    })

    const {getMenus} = useLayoutMenus();
    const {getShowSidebarLogo, getIsTopMenuMode} = useRootSetting();
    const menuSetting = computed(() => {
      if (getIsTopMenuMode.value) {
        return {
          ...getMenuSetting.value, ...{
            mode: 'horizontal',
            collapse: false,
            backgroundColor: null,
            textColor: '#303133'
          }
        }
      }
      return getMenuSetting.value;
    });

    return {
      menuSetting,
      defaultActive,
      getMenus,
      getShowSidebarLogo
    }
  },
};
</script>
<style lang="scss" scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
}

.menu-container {
  &.el-menu:not(.el-menu--horizontal) {
    height: 100%;

    &:not(.el-menu--collapse) {
      width: 220px;
    }
  }

  &.el-menu.el-menu--horizontal {
    :deep(.el-sub-menu .el-sub-menu__title) {
      height: 49px !important;
      line-height: 49px !important;
    }
  }
}

</style>