<template>
  <el-card header="动态" shadow="none">
    <el-row>
      <el-col :span="24" v-for="(item,index) in projects" :key="index" class="item flex-row between align-center">
        <div class="flex-row mr-2" style="width: 80%">
          <div>
            <el-image
              style="width: 60px; height: 60px"
              :src="item.image"
              :preview-src-list="[item.image]"
            >
            </el-image>
          </div>
          <div class="ml-2">
            <div>{{ item.title }}</div>
            <div class="text-sm text-secondary text-overflow-2">{{ item.desc }}</div>
          </div>
        </div>
        <div class="flex-col between align-center text-sm text-secondary">
          <span>{{ item.name }}</span>
          <span class="text-overflow-1">{{ item.time }}</span>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import {defineComponent, shallowReactive, toRefs} from 'vue';
import {getDynamicData} from "@/views/dashboard/workplace/data.js";

export default defineComponent({
  setup() {
    const state = shallowReactive({
      projects: getDynamicData(),
    })

    return {
      ...toRefs(state),
    }
  }
})
</script>
<style lang="scss" scoped>
.item {
  padding: 10px 0;
  border-bottom: solid 1px var(--el-border-color-lighter);

  &.item:last-child {
    border-bottom: 0;
  }
}


</style>