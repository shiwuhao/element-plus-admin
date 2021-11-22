<template>
  <div class="list">
    <div class="item" v-for="(item,index) in secureSettingList" :key="index">
      <div>
        <div class="title">{{ item.label }}</div>
        <div class="label">{{ item.description }}</div>
      </div>
      <div>
        <el-switch v-model="item.status"></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import {BasicForm} from '@/components/Form/index.js'
import {reactive, toRefs} from "vue";

export default {
  name: "BasicSetting",
  components: {BasicForm},
  setup() {
    const state = reactive({
      secureSettingList: [
        {label: '系统消息', value: '1', description: '系统消息', status: true},
        {label: '待办任务', value: '2', description: '待办任务', status: true},
        {label: '站内信', value: '2', description: '站内信', status: true},
      ]
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>