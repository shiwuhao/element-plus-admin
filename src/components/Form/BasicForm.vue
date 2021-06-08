<template>
  <el-form>
    {{ $slots }}
    <template v-for="schema in getSchema" :key="schema.field">
      <FormItem></FormItem>
    </template>
  </el-form>
</template>

<script>
import FormItem from "@/components/Form/components/FormItem";

export default {
  name: "BasicForm",
  components: {FormItem},
  setup() {
    const getSchema = [
      {
        field: 'field1',
        label: 'Input',
        placeholder: '',
        component: 'Input',
        componentProps: {},
        isShow: false,
      }
    ];

    return {getSchema}
  }
}
</script>

<style scoped>

</style>