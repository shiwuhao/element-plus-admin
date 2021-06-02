<template>
  <el-table v-bind="$attrs">
    <template v-for="(column,index) in columns" :key="index">
      <slot v-if="column.slot" :name="column.slot"></slot>
      <el-table-column v-else v-bind="column"/>
    </template>
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: "BasicTable",
  props: ['columns']
}
</script>

<style scoped>

</style>