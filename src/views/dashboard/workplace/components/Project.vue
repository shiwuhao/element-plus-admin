<template>
  <el-card header="项目" shadow="none">
    <el-row :gutter="0">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="(item,index) in projects" :key="index">
        <el-card class="card" shadow="hover">
          <div class="flex">
            <el-avatar :src="item.image" :size="24"></el-avatar>
            <span class="ml-2">{{ item.title }}</span>
          </div>
          <div class="text-secondary text-overflow mtb-1">
            {{ item.desc }}
          </div>
          <div class="flex row-between text-secondary">
            <span>{{ item.name }}</span>
            <span>{{ item.time }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import {defineComponent, shallowReactive, toRefs} from 'vue';
import {getProjectData} from "@/views/dashboard/workplace/data.js";

export default defineComponent({
  setup() {
    const state = shallowReactive({
      projects: getProjectData(),
    })

    return {
      ...toRefs(state),
    }
  }
})
</script>
<style lang="scss" scoped>
//:deep(.common-card) {
//  .application-image-card {
//    position: relative;
//
//    .image {
//      width: 24px;
//      height: 24px;
//      border-radius: 50%;
//      position: absolute;
//      top: 12px;
//      left: 13px;
//    }
//
//    .project-card-title {
//      margin-left: 32px;
//    }
//
//    .bottom {
//      span {
//        font-size: $font-size-small;
//        color: $color-text-gray;
//      }
//    }
//  }
//}

</style>