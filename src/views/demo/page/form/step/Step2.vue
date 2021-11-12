<template>
  <el-descriptions title="确认信息" :column="1" size="default" border>
    <el-descriptions-item label="付款账户">{{ info.payment_account }}</el-descriptions-item>
    <el-descriptions-item label="支付方式">{{ info.payment_method }}</el-descriptions-item>
    <el-descriptions-item label="收款账户">{{ info.collection_account }}</el-descriptions-item>
    <el-descriptions-item label="收款人">{{ info.payee }}</el-descriptions-item>
    <el-descriptions-item label="转账金额">{{ info.amount }}</el-descriptions-item>
  </el-descriptions>
  <el-form :model="form" :rules="rules">
    <el-form-item label="支付密码" prop="password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="default">上一步</el-button>
      <el-button type="primary">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "Step2",
  props: {
    previewInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const {previewInfo: info} = toRefs(props)
    const state = reactive({
      form: {password: ''},
      rules: {
        password: [{required: true, trigger: 'blur'}]
      }
    })

    return {
      ...toRefs(state),
      info,
    }
  }
}
</script>

<style scoped>

</style>