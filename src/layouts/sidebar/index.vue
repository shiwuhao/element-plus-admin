<template>
  <el-drawer
    v-if="isMobile"
    v-model="drawer"
    :size="250"
    :with-header="false"
    direction="ltr">
    <LayoutMenu/>
  </el-drawer>
  <LayoutMenu v-else/>
</template>

<script>
import LayoutMenu from '@/layouts/menu/index'

export default {
  name: "LayoutSidebar",
  components: {LayoutMenu},
  data() {
    return {
      isMobile: false,
      drawer: false,
    };
  }
}
</script>

<style scoped>

</style>