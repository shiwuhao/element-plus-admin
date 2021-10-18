<template>
  <el-row :gutter="10">
    <el-col v-for="(item, index) in lists" :key="index" :span="6" style="padding-bottom: 5px;padding-top: 5px;">
      <el-card :body-style="{ padding: '0px' }">
        <el-image class="image" :src="item.image" :preview-src-list="[item.image]"
        >
        </el-image>
        <div class="text-secondary m-2">
          <span>{{ item.title }}</span>
          <div class="bottom">
            <time class="time">{{ item.time }}</time>
            <el-button type="text" class="button">{{ item.name }}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, ref, shallowReactive, toRefs} from 'vue';
import {getProjectData} from "./data";

export default defineComponent({
  setup() {
    const state = shallowReactive({
      lists: getProjectData(12),
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>
<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>