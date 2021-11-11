<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="付款账户">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="收款账户">
      <el-input v-model="form.name">
        <template #prepend>
          <el-select v-model="form.pay_method" style="width: 100px;">
            <el-option label="支付宝" value="alipay"></el-option>
            <el-option label="微信" value="wxpay"></el-option>
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="收款人姓名">
      <el-input v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="转账金额">
      <el-input v-model="form.desc"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "Step1",
  setup() {
    const state = reactive({
      form: {
        pay_method: 'alipay',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>

</style>