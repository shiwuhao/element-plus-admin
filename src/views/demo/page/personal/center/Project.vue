<template>
  <el-row>
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="(item,index) in projects" :key="index">
      <el-card class="card" shadow="hover">
        <div class="flex-row mb-1">
          <el-avatar :src="item.image" :size="24"></el-avatar>
          <span class="ml-2">{{ item.title }}</span>
        </div>
        <div class="text-df h-3 text-secondary text-overflow-3 my-1">
          {{ item.desc }}
        </div>
        <div class="flex-row between text-secondary">
          <span>{{ item.name }}</span>
          <span>{{ item.time }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, shallowReactive, toRefs} from 'vue';
import {getProjectData} from "./data.js";

export default defineComponent({
  setup() {
    const state = shallowReactive({
      projects: getProjectData(21),
    })

    return {
      ...toRefs(state),
    }
  }
})
</script>