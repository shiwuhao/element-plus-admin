<template>
  <el-row>
    <el-col :span="24" v-for="(item,index) in lists" :key="index" class="item flex-row between">
      <div class="flex-row mr-2 w-full">
        <div>
          <el-avatar :size="45" :src="item.image"></el-avatar>
        </div>
        <div class="ml-2 w-full">
          <div class="flex-row between">
            <h4 class="m-0">{{ item.title }}</h4>
            <div class="text-sm text-secondary">{{ item.time }}</div>
          </div>
          <div class="text-df text-secondary text-overflow-2">{{ item.desc }}</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {defineComponent, shallowReactive, toRefs} from 'vue';
import {getProjectData} from "./data";

export default defineComponent({
  setup() {
    const state = shallowReactive({
      lists: getProjectData(15),
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>
<style lang="scss" scoped>
.item {
  @extend .py-4;
  border-bottom: solid 1px var(--el-border-color-lighter);

  &.item:last-child {
    border-bottom: 0;
  }
}


</style>