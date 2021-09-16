<template>
  <el-card shadow="always" class="m10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="销售额" name="first">销售额</el-tab-pane>
      <el-tab-pane label="访问量" name="second">访问量</el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import {defineComponent,ref} from 'vue';
export default defineComponent({
  setup(){
    return {
      activeName: ref('first')
    }
  }
})
</script>