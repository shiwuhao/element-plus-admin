<template>
  <div class="setting-page">
    <el-descriptions :title="item.title" v-for="item in msgNotifyList" :key="item.key">
      <el-descriptions-item :label="item.label">{{ item.value }}</el-descriptions-item>
      <template #extra>
        <el-switch v-model="value" />
      </template>
    </el-descriptions>
  </div>
</template>
<script>
import {defineComponent, reactive, ref} from 'vue';
import {msgNotifyList} from '../data.js';
export default defineComponent({
  setup(){
    const value = ref(true)
    return {
      msgNotifyList,
      value
    }
  }
})
</script>