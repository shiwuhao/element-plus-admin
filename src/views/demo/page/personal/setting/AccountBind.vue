<template>
  <div class="list">
    <div class="item" v-for="(item,index) in secureSettingList" :key="index">
      <div>
        <div class="title">{{ item.label }}</div>
        <div class="label">{{ item.description }}</div>
      </div>
      <div>
        <el-button type="text">{{ item.extra }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {BasicForm} from '@/components/Form'
import {reactive, toRefs} from "vue";

export default {
  name: "BasicSetting",
  components: {BasicForm},
  setup() {
    const state = reactive({
      secureSettingList: [
        {label: 'QQ', value: '1', description: '当前未绑定QQ帐号', extra: '绑定'},
        {label: '微信', value: '2', description: '当前未绑定微信帐号', extra: '绑定'},
        {label: '支付宝', value: '3', description: '当前未绑定支付宝帐号', extra: '绑定'},
        {label: '微博', value: '4', description: '当前未绑定微博帐号', extra: '绑定'},
        {label: 'GitHub', value: '5', description: '当前未绑定GitHub帐号', extra: '绑定'},
      ]
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>