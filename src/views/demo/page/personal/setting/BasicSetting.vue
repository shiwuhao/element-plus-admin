<template>
  <el-row>
    <el-col :span="12">
      <BasicForm :schemas="schemas" label-position="top"></BasicForm>
    </el-col>
  </el-row>
</template>

<script>
import {BasicForm} from '@/components/Form'
import {reactive, ref, toRefs} from "vue";

export default {
  name: "BasicSetting",
  components: {BasicForm},
  setup() {
    const state = reactive({
      form: {},
      rules: [],
      submitLoading: false,
      schemas: [
        {field: 'email', label: '邮箱', component: 'Input', formProps: {rules: [{required: true, trigger: 'blur'}]}},
        {field: 'nickname', label: '昵称', component: 'Input', formProps: {rules: [{required: true, trigger: 'blur'}]}},
        {field: 'desc', label: '简介', component: 'Textarea', formProps: {rules: [{required: true, trigger: 'blur'}]}},
      ]
    })

    const submit = () => {

    }

    return {
      ...toRefs(state),
      submit,
    }
  },
}
</script>

<style scoped>

</style>