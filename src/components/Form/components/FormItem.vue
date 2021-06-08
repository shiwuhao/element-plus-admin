<template>
  <el-form-item v-bind="schema.formProps">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      {{ item }}
      <slot :name="item" v-bind="data"></slot>
    </template>
  </el-form-item>
</template>

<script>
export default {
  name: "BasicFormItem"
}
</script>

<style scoped>

</style>