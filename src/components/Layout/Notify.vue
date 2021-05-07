<template>
  <span @click="visable=!visable">
    <el-popover width="500" v-model="visable" trigger="click">
      <template #reference>
          <el-badge is-dot class="item">
          <i class="iconfont icon-notify"></i>
        </el-badge>
      </template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="通知(3)" name="first">
          <div style="height: 300px;width: 300px;">
            通知(3)
          </div>
        </el-tab-pane>
        <el-tab-pane label="消息(4)" name="second">
          <div style="height: 300px;width: 300px;">消息(4)</div>
        </el-tab-pane>
        <el-tab-pane label="待办(5)" name="third">
          <div style="height: 300px;width: 300px;">待办(5)</div>
        </el-tab-pane>
      </el-tabs>
    </el-popover>
  </span>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Notify',
  data() {
    return {
      visable: false,
      activeName: 'first',
    };
  },
  methods: {
    handleClick() {

    }
  }
});
</script>
