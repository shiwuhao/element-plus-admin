<template>
  <el-container class="side-menu-layout" :class="containerClass">
    <div v-if="device==='mobile' && !isCollapse" class="drawer-bg" @click="handleClickOutside"/>
    <el-aside width="auto" class="sidebar-container">
      <nav-menu/>
    </el-aside>
    <el-container class="main" :class="mainContainerClass">
      <el-scrollbar style="width: 100%;">
        <div class="header-container">
          <el-header height="50" v-if="setting.navBar">
            <navbar/>
          </el-header>
          <el-header height="30" v-if="setting.tagView">
            <tag-view/>
          </el-header>
        </div>
        <el-main class="main-container">
          <route-view/>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
<script>
import Navbar from "@/layouts/Navbar_bak";
import NavMenu from "@/components/NavMenu/NavMenu";
import TagView from "@/components/TagView/TagView";
import RouteView from "@/layouts/RouteView";
import ResizeMixin from '@/layouts/mixin/ResizeHandler'
import {mapGetters} from 'vuex';

export default {
  name: 'SideMenuLayout',
  components: {
    Navbar, TagView, RouteView, NavMenu
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'device',
      'sidebar',
      'setting'
    ]),
    containerClass() {
      return {
        'mobile': this.device === 'mobile',
        'hide-sidebar': this.sidebar.collapse,
        'open-sidebar': !this.sidebar.collapse,
      }
    },
    mainContainerClass() {
      return {
        'has-tag-view': this.setting.tagView,
        'fixed-header': this.setting.fixedHeader,
      }
    },
    // 是否水平折叠收起菜单
    isCollapse() {
      return !!this.sidebar.collapse;
    }
  },
  date() {
    return {
      tagView: false,
      drawer: false,
    }
  },
  methods: {
    // 点击遮罩区域关闭sidebar
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar')
    },
    toggleSetting() {
      this.$refs['setting'].toggleDrawer();
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.side-menu-layout {
  height: 100vh;

  .el-header {
    padding: 0 5px;
  }

  .el-main {
    padding: 5px 5px;
  }

  &.mobile {
    .sidebar-container {
      position: absolute;
      height: 100vh;
      z-index: 101;
    }

    &.hide-sidebar {
      .sidebar-container {
        display: none;
      }
    }
  }

  .main.fixed-header {
    .header-container {
      background: white;
      padding: 0;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9;
      width: 100%;
    }

    .main-container {
      margin-top: 5px;
      padding-top: $navBarHeight;
    }

    &.has-tag-view .main-container {
      margin-top: 5px;
      padding-top: $navBarTagViewHeight;
    }
  }
}

</style>