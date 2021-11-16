<template>
  <el-container class="container">
    <el-header height="auto">
      <LayoutHeader/>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <LayoutSidebar/>
      </el-aside>
      <el-container>
        <el-header height="auto">
          <TagView/>
        </el-header>
        <el-main class="main">
          <LayoutContent/>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>

import LayoutHeader from './header/index';
import LayoutContent from './content/index';
import LayoutSidebar from "@/layouts/sidebar";
import LayoutMenu from '@/layouts/menu';
import TagView from '@/layouts/tagview/tagView';

export default {
  name: 'Layout1',
  components: {
    LayoutSidebar,
    LayoutHeader,
    LayoutContent,
    LayoutMenu,
    TagView
  }
};
</script>

<style lang="scss" scoped>
.el-container, .el-header, .el-main, .el-aside {
  padding: 0;
}

.container {
  width: 100%;
  height: 100vh;
  padding: 0 0;

  .main {
    height: 100vh;
    padding-bottom: 50px;
  }
}
</style>