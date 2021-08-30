<template>
  <el-card class="setting-card">
    <el-tabs :tab-position="tabPosition" class="setting-tabs">
      <el-tab-pane label="基本设置">
<!--        <BaseSetting />-->
      </el-tab-pane>
      <el-tab-pane label="安全设置">安全设置</el-tab-pane>
      <el-tab-pane label="账号绑定">账号绑定</el-tab-pane>
      <el-tab-pane label="新消息通知">新消息通知</el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import {defineComponent,ref} from 'vue';
// import BaseSetting from './baseSetting/index';
export default defineComponent({
   // components: {BaseSetting},
   setup(){
     const tabPosition = ref('left');
     return {
       tabPosition
     }
   }
})
</script>
<style lang="scss" scoped>
.setting-card {
  margin: 24px;
}
</style>