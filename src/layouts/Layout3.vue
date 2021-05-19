<template>
  <el-container class="container">
    <el-header height="50px">
      <LayoutHeader/>
    </el-header>
    <el-main class="main">
      <LayoutContent/>
    </el-main>
  </el-container>
</template>
<script>

import LayoutHeader from './header/index';
import LayoutContent from './content/index';
import LayoutSidebar from "@/layouts/sidebar";
import LayoutMenu from '@/layouts/menu'

export default {
  name: 'Layout3',
  components: {
    LayoutSidebar,
    LayoutHeader,
    LayoutContent,
    LayoutMenu
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
    padding: 10px;
  }
}
</style>