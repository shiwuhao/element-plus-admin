<template>
  <el-card shadow="none" class="m-2">
    <el-tabs tab-position="left">
      <el-tab-pane label="基础设置">
        <BaseSetting/>
      </el-tab-pane>
      <el-tab-pane label="安全设置">安全设置</el-tab-pane>
      <el-tab-pane label="账户绑定">账户绑定</el-tab-pane>
      <el-tab-pane label="消息通知">消息通知</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import BaseSetting from "./BasicSetting";

export default {
  name: "index",
  components: {BaseSetting}
}
</script>

<style scoped>

</style>