<template>
  <div class="list">
    <div class="item" v-for="(item,index) in secureSettingList" :key="index">
      <div>
        <div class="title">{{ item.label }}</div>
        <div class="label">{{ item.description }}</div>
      </div>
      <div>
        <el-button type="text">修改</el-button>
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
        {label: '账户密码', value: '1', description: '当前密码强度：强', extra: '修改'},
        {label: '密码手机', value: '2', description: '已绑定手机：185****7907', extra: '修改'},
        {label: '密保问题', value: '3', description: '未设置密保问题，密保问题可有效保护账户安全', extra: '修改'},
        {label: '密保邮箱', value: '4', description: '已绑定邮箱：：admin****.com', extra: '修改'},
        {label: 'MFA设备', value: '5', description: '未绑定 MFA 设备，绑定后，可以进行二次确认', extra: '修改'},
      ]
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>