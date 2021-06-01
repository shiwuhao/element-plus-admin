<template>
  <el-table v-bind="$attrs">
    <slot></slot>
<!--    <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">-->
<!--      <slot :name="item" v-bind="data"></slot>-->
<!--    </template>-->
<!--    <template #[`header-${column.dataIndex}`] v-for="column in columns" :key="column.dataIndex">-->
<!--      <HeaderCell :column="column" />-->
<!--    </template>-->
  </el-table>
</template>

<script>
export default {
  name: "BasicTable"
}
</script>

<style scoped>

</style>