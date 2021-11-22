<template>
  <el-row :gutter="10">
    <el-col v-for="(item, index) in lists" :key="index" :xs="24" :sm="12" :md="12" :lg="8" :xl="8" class="py-1">
      <el-card :body-style="{ padding: '10px' }" shadow="none">
        <div>
          <div class="flex-row">
            <el-image class="image" :src="item.image" :preview-src-list="[item.image]"></el-image>
            <div class="flex-col between w-full m-2">
              <h4 class="m-0 text-overflow-1">{{ item.title }}</h4>
              <div class="flex-row between text-xs text-secondary">
                <div class="text-overflow-1">{{ item.time }}</div>
                <div class="text-overflow-1">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, ref, shallowReactive, toRefs} from 'vue';
import {getProjectData} from "./data.js";

export default defineComponent({
  setup() {
    const state = shallowReactive({
      lists: getProjectData(32),
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
  width: 100px;
  display: block;
}
</style>