<template>
  <el-col>
    <el-form-item>
      <el-button>重置</el-button>
      <el-button>查询</el-button>
    </el-form-item>
  </el-col>
</template>

<script>
const schemas = [
  {
    field: 'field1',
    label: '字段1',
    component: 'Input',
  }
];
export default {
  name: "FormItem"
}
</script>

<style scoped>

</style>