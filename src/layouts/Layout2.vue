<template>
  <el-container class="container">
    <el-aside width="auto">
      <LayoutSidebar/>
    </el-aside>
    <el-main class="main">
      <el-header class="header" height="50px">
        <LayoutHeader/>
      </el-header>
      <LayoutContent class="content"/>
    </el-main>
  </el-container>
</template>
<script>

import LayoutHeader from './header/index';
import LayoutContent from './content/index';
import LayoutSidebar from "@/layouts/sidebar";
import LayoutMenu from '@/layouts/menu'

export default {
  name: 'Layout2',
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
  .content{
    margin-top: 5px;
  }
}
</style>