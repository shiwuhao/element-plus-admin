<template>
  <div class="container" @click="visible=!visible">
    <el-popover width="500" v-model:visible="visible">
      <template #reference>
        <div class="badge flex-col-center">
          <el-badge type="danger" is-dot>
            <i class="iconfont icon-notify"></i>
          </el-badge>
        </div>
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
  </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Notify',
  data() {
    return {
      visible: false,
      activeName: 'first',
    };
  },
  methods: {
    handleClick() {

    }
  }
});
</script>
<style lang="scss" scoped>
.container .badge {
  height: 49px;
  padding: 0 10px;
}
</style>