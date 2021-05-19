<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <el-menu v-bind="getMenuSetting" :default-active="defaultActive">
        <SidebarLogo class="logo" v-if="getShowSidebarLogo" :collapse="isCollapse"/>
        <sub-menu v-for="menu in getMenus" :index="menu.path" :key="menu.path" :menu="menu"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SubMenu from "@/layouts/menu/SubMenu";
import SidebarLogo from "@/layouts/menu/SidebarLogo";
import {useMenuSetting} from "@/hooks/setting/useMenuSeeting";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";
import {useLayoutMenus} from "@/layouts/menu/useLayoutMenus";
import {computed} from "vue";
import {useRouter} from 'vue-router';

export default {
  name: 'LayoutMenu',
  components: {
    SubMenu, SidebarLogo
  },
  setup() {
    const {currentRoute: {meta, path}} = useRouter();
    const {getMenuSetting} = useMenuSetting();
    const defaultActive = computed(() => meta && meta.activeMenu ? meta.activeMenu : path);
    const {getMenus} = useLayoutMenus();
    const {getShowSidebarLogo} = useRootSetting();
    return {
      getMenuSetting,
      defaultActive,
      getMenus,
      getShowSidebarLogo
    }
  },
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  height: 100vh;

  ::v-deep .el-menu {
    height: 100%;
    border: 0;

    .sub-menu-wrapper > .el-menu-item {
      padding-left: 15px !important;

      & > div {
        padding: 0 15px !important;
      }
    }

    .el-submenu .el-submenu__title {
      padding-left: 15px !important;
    }

    &.el-menu--collapse {
      width: 50px;
    }

    &:not(.el-menu--collapse) {
      width: 200px;
    }

    &.el-menu--collapse > div > .el-submenu > .el-submenu__title span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
  }

  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu:not(.el-menu--horizontal) {
    height: 100%;
  }

  ::v-deep .el-scrollbar .el-scrollbar__view {
    height: 100%;
  }
}
</style>