<template>
  <el-drawer
    v-if="isMobile"
    title="我是标题"
    v-model="drawer"
    direction="ltr"
    :before-close="handleClose" destroy-on-close>
    <span>我来啦!</span>
  </el-drawer>
  <el-scrollbar style="width: 100%;">
    <LayoutMenu/>
  </el-scrollbar>
</template>

<script>
import LayoutMenu from '@/layouts/menu/index'

export default {
  name: "LayoutSidebar",
  components: {LayoutMenu},
  data() {
    return {
      isMobile:false,
    };
  }
}
</script>

<style scoped>

</style>