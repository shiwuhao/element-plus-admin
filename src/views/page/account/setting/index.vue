<template>
    <el-card class="setting-card">
        <el-tabs :tab-position="tabPosition" class="setting-tabs" v-model="activeName">
          <el-tab-pane label="基本设置" name="1">
            <BaseSetting />
          </el-tab-pane>
          <el-tab-pane label="安全设置" name="2">
            <SafeSetting />
          </el-tab-pane>
          <el-tab-pane label="账号绑定" name="3">账号绑定</el-tab-pane>
          <el-tab-pane label="新消息通知" name="4">新消息通知</el-tab-pane>
        </el-tabs>
    </el-card>
</template>
<script>
import {defineComponent,ref} from 'vue';
import BaseSetting from './baseSetting/index';
import SafeSetting from './safeSetting/index';
export default defineComponent({
   components: {BaseSetting,SafeSetting},
   setup(){
     const tabPosition = ref('left');
     const activeName = ref('2');
     return {
       tabPosition,
       activeName
     }
   }
})
</script>
<style lang="scss" scoped>
.setting-card {
  margin: 24px;
  .setting-tabs {
    height: 100vh;
   ::v-deep .el-tabs__nav-wrap  {
      width: 224px;
     .el-tabs__nav {
      .el-tabs__item {
        text-align: left;
      }
     }
    }
  }
}
</style>