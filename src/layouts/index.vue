<template>
  <el-container class="container">
    <LayoutHeader/>
    <el-container>
      <LayoutContent/>
    </el-container>
  </el-container>
</template>
<script>

import LayoutHeader from './header/index';
import LayoutContent from './content/index'
import {mapGetters} from 'vuex'

export default {
  name: 'Layout',
  components: {
    LayoutHeader, LayoutContent
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 0;
}
</style>