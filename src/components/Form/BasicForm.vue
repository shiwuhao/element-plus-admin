<template>
  <el-form>
    {{$slots}}
    <template v-for="schema in getSchema" :key="schema.field">
      <el-form-item label="活动名称">
        <template #[item]="data" v-for="item in Object.keys($slots)">
          {{item}}
          <slot :name="item" v-bind="data"></slot>
        </template>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
export default {
  name: "BasicForm",
  setup() {
    const getSchema = [
      {field: 'field1', label: 'Input', component: 'Input', componentProps: {}}
    ];

    return {getSchema}
  }
}
</script>

<style scoped>

</style>