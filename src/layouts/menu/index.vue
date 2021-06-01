<template>
  <el-scrollbar>
    <el-menu class="menu-container" v-bind="menuSetting" :default-active="defaultActive">
      <SidebarLogo class="logo" v-if="getShowSidebarLogo"/>
      <sub-menu v-for="menu in getMenus" :index="menu.path" :key="menu.path" :menu="menu"/>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import SubMenu from "@/layouts/menu/SubMenu";
import SidebarLogo from "@/layouts/menu/SidebarLogo";
import {useMenuSetting} from "@/hooks/setting/useMenuSeeting";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";
import {useLayoutMenus} from "@/layouts/menu/useLayoutMenus";
import {computed, watch, unref, ref} from "vue";
import {useRouter} from 'vue-router';

export default {
  name: 'LayoutMenu',
  components: {
    SubMenu, SidebarLogo
  },
  setup() {
    const {currentRoute} = useRouter();
    let {getMenuSetting} = useMenuSetting();

    // defaultActive
    const defaultActive = computed(() => {
      const {meta, path} = currentRoute.value;
      return meta && meta.activeMenu ? meta.activeMenu : path;
    })

    // menu
    const {getMenus} = useLayoutMenus();
    const {getShowSidebarLogo, getIsTopMenuMode} = useRootSetting();
    const menuSetting = computed(() => {
      if (unref(getIsTopMenuMode)) {
        return {
          ...unref(getMenuSetting), ...{
            mode: 'horizontal',
            backgroundColor: null,
            textColor: '#303133',
          }
        }
      }
      return {...unref(getMenuSetting)};
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
::v-deep .el-scrollbar__view {
  height: 100%;
}

.menu-container {
  ::v-deep & > div .el-menu-item {
    padding-left: 15px !important;

    & > div {
      padding: 0 15px !important;
    }
  }

  ::v-deep &.el-menu:not(.el-menu--horizontal) {
    height: 100%;
    border: 0;


    & > .el-submenu > .el-submenu__title {
      padding-left: 15px !important;
    }

    &.el-menu--collapse {
      width: 50px;
    }

    &:not(.el-menu--collapse) {
      width: 230px;
    }

    &.el-menu--collapse > div > .el-submenu > .el-submenu__title span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
  }
}


//el-menu--horizontal
::v-deep .el-menu.el-menu--horizontal {
  .menu-item {
    float: left;
  }

  .el-menu-item {
    height: 50px;
    line-height: 50px;

    &:hover {
      background: #F2F6FC !important;
    }
  }

  .el-submenu__title {
    height: 50px;
    line-height: 50px;
  }
}

::v-deep .el-popper .el-menu--horizontal {
  .el-menu-item:hover {
    background: #F2F6FC !important;
  }
}

//.el-menu:not(.el-menu--horizontal) {
//
//  &:not(.el-menu--collapse) {
//    width: 200px;
//  }
//}


::v-deep .el-scrollbar .el-scrollbar__view {
  height: 100%;
}
</style>