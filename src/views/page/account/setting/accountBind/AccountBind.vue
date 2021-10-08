<template>
  <div class="setting-page">
    <el-descriptions :title="item.title" v-for="item in accountBindList" :key="item.key">
      <el-descriptions-item>
        <template #label>
          <svg-icon :iconClass="item.avatar"/>
          {{item.label}}
        </template>
        {{ item.value }}
      </el-descriptions-item>
      <template #extra>
        <span class="el-descriptions-title">绑定</span>
      </template>
    </el-descriptions>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import {accountBindList} from '../data';
export default defineComponent({
  setup(){
    return {
      accountBindList
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .el-descriptions {
  position: relative;
}
::v-deep .el-descriptions__title,::v-deep .el-descriptions__label {
  margin-left: 72px;
}
.svg-icon {
  width: 48px;
  height: 48px;
  position: absolute;
  top: -7px;
  left: 8px;
}
</style>