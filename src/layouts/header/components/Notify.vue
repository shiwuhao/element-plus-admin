<template>
  <div class="flex-col center align-end" @click="visible=!visible">
    <el-popover width="500" v-model:visible="visible">
      <template #reference>
        <el-badge type="danger" is-dot style="height: 18px;">
          <icon name="el-notify" size="18"/>
        </el-badge>
      </template>
      <el-tabs v-model="activeName">
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
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Notify',
  setup() {
    const visible = ref(false);
    const activeName = ref('first');
    return {
      visible,
      activeName
    }
  },
});
</script>