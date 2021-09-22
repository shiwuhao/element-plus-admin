<template>
  <!--  <div class="menu-item">-->
  <el-menu-item :index="menu.path" :route="menu">
    <i :class="menu.icon"/>
    <template #title>{{ menu.title }}</template>
  </el-menu-item>
  <!--  </div>-->
</template>
<style lang="scss" scoped>
.el-menu-item i {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
</style>
<script>
export default {
  name: 'ItemMenu',
  props: {
    menu: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: '',
    }
  },
};
</script>