<template>
  <el-menu-item class="container" index="/">
    <img v-show="collapse" :src="logo" class="sidebar-logo">
    <template #title>
      <span class="sidebar-title">{{ title }} </span>
    </template>
  </el-menu-item>
</template>

<script>
export default {
  name: 'logo',
  props: {
    collapse: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      logo: process.env.VUE_APP_LOGO
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 50px;
  line-height: 50px;

  ::v-deep div {
    padding: 0 10px !important;
  }

  .sidebar-logo {
    width: 35px;
    height: 35px;
    padding-right: 10px;
  }

  .sidebar-title {
    font-size: 15px;
    font-weight: bold;
    color: white;
    padding: 0;
    margin: 0;
  }
}
</style>
