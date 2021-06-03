<template>
  <el-table v-bind="$attrs">
    <template v-for="(column,index) in columns" :key="index">
      <el-table-column v-if="column.slot" v-bind="column">
        <template #default="scope">
          <slot :name="column.slot" v-bind="scope"></slot>
        </template>
      </el-table-column>
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