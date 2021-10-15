<template>
  <el-card header="项目" shadow="none">
    <!--    <el-row :gutter="10">-->
    <!--      <el-col :span="8" v-for="(item,index) in leftTopData" :key="index">-->
    <el-space fill wrap size="medium" :fillRatio="32" direction="horizontal">
      <el-card shadow="hover" v-for="(item,index) in leftTopData" :key="index" style="padding: 0 5px">
        <div class="flex">
          <el-avatar :src="item.image" :size="30"></el-avatar>
          <span class="text-lg ml-4">{{ item.title }}</span>
        </div>
        <div class="text-secondary h-2"> {{ item.desc }}</div>
        <div class="flex row-between text-secondary">
          <span>{{ item.name }}</span>
          <span>{{ item.time }}</span>
        </div>
      </el-card>
    </el-space>
    <!--      </el-col>-->
    <!--    </el-row>-->
  </el-card>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {Card} from "@/components/Card";
import {ElCard} from "element-plus"


import {leftTopData} from "@/views/dashboard/workplace/data.js";
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";

export default defineComponent({
  components: {Card},
  setup() {
    const {getIsMobile} = useRootSetting();
    const direction = ref('horizontal');
    const fillRatio = ref(33)
    const size = ref(33)
    return {
      cardName: ref('进行中的项目'),
      headerType: ref('btn'),
      btnName: ref('全部项目'),
      leftTopData,
      shadow: ref('hover'),
      imageCard: ref(true),
      getIsMobile,
      header: ref(false),

      direction,
      fillRatio,
      size
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