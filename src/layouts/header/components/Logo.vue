<template>
  <div class="container flex-col-center">
    <div class="flex-row-left">
      <img class="logo" :src="logo">
      <span class="title">{{ title }} </span>
    </div>
  </div>
</template>
<script>
export default {
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
  height: 49px;
  padding: 0 10px;

  .logo {
    height: 35px;
  }

  .title {
    font-size: 15px;
    font-weight: bold;
    padding-left: 5px;
    margin: 0;
  }
}
</style>