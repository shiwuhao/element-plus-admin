<template>
  <el-table v-bind="$attrs">
<!--    <slot></slot>-->
    <table-column prop="date"
                   label="日期"
                   width="180"></table-column>
  </el-table>
</template>

<script>
import TableColumn from 'element-plus/lib/el-table-column/index'
export default {
  name: "BasicTable",
  components:{TableColumn}
}
</script>

<style scoped>

</style>