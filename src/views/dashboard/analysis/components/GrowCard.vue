<template>
  <el-row :gutter="10">
    <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="24" v-for="(item,index) in growData" :key="index" class="mb10">
      <BasicCard :title="item.title" :notice="item.notice">
        <el-row gutter="10">
          <el-col :span="10">{{ item.value }}</el-col>
          <el-col :span="14">
            <div :ref="item.elRef" :style="item.chartStyle"></div>
          </el-col>
        </el-row>
        <template #footer>{{ item.description }}</template>
      </BasicCard>
    </el-col>
  </el-row>
</template>

<script>
import {useTransition} from '@vueuse/core'
import {onMounted, ref} from "vue";
import {useECharts} from "@/composables/useECharts";
import {getGrowData} from "@/views/dashboard/analysis/data";
import {BasicCard} from '@/components/Card'

export default {
  name: "GrowCard",
  components: {BasicCard},
  setup() {
    const duration = 500;
    const baseNumber = ref(0);
    const customNumber = useTransition(baseNumber, {duration})

    const growData = getGrowData().map(item => {
      const {elRef, setOptions} = useECharts();
      return {...item, ...{elRef, setOptions,}};
    })

    onMounted(() => {
      growData.forEach(item => {
        item.setOptions(item.chartOption)
      })
    })

    return {
      growData,
      customNumber,
    }
  }
}
</script>

<style lang="scss" scoped>
//:deep(.el-col) {
//  @media screen and (max-width: 1200px) {
//    margin-bottom: 10px;
//  }
//}

</style>