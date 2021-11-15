<template>
  <el-descriptions :column="1" border>
    <el-descriptions-item label="付款账户">{{ info.payment_account }}</el-descriptions-item>
    <el-descriptions-item label="支付方式">{{ info.payment_method }}</el-descriptions-item>
    <el-descriptions-item label="收款账户">{{ info.collection_account }}</el-descriptions-item>
    <el-descriptions-item label="收款人">{{ info.payee }}</el-descriptions-item>
    <el-descriptions-item label="转账金额">{{ info.amount }}</el-descriptions-item>
  </el-descriptions>
  <el-form ref="formElRef" :model="form" :rules="rules" class="mt-5" autocomplete="off">
    <el-form-item label="支付密码" prop="password">
      <el-input v-model="form.password" show-password></el-input>
    </el-form-item>
    <div class="flex-row center">
      <el-button type="default" @click="handlePrev">上一步</el-button>
      <el-button type="primary" @click="handleNext" :loading="loading">下一步</el-button>
    </div>
  </el-form>
</template>

<script>
import {reactive, ref, toRefs} from "vue";
import {useTimeoutFn} from '@vueuse/core'

export default {
  name: "Step2",
  emits: ['next', 'prev'],
  props: {
    previewInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {emit}) {
    const {previewInfo: info} = toRefs(props)
    const formElRef = ref(null);
    const state = reactive({
      form: {password: ''},
      rules: {
        password: [{required: true, trigger: 'blur', message: '请输入支付密码'}]
      },
      loading: false,
    })

    const methods = {
      handlePrev: () => {
        emit('prev')
      },
      handleNext: () => {
        formElRef.value.validate(valid => {
          if (valid) {
            state.loading = true;
            useTimeoutFn(() => {
              state.loading = false;
              emit('next', info)
            }, 1000)
          }
        })
      },
    }

    return {
      ...toRefs(state),
      ...methods,
      formElRef,
      info,
    }
  }
}
</script>

<style scoped>

</style>