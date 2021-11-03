<template>
  <el-menu-item :index="menu.path" :route="menu">
<!--    <i :class="menu.icon"/>-->
    <icon-svg :name="menu.icon" size="18" />
    <template #title>{{ menu.title }}</template>
  </el-menu-item>
</template>
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
<style lang="scss" scoped>
.el-menu-item i {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
</style>