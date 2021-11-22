<template>
  <PageWrapper :title="$route['meta']['title']">
    <template #content>
      <Notice/>
    </template>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" class="mb-2">
        <el-card shadow="none">
          <div ref="chartElRef1" style="width: 100%;height: 500px;"></div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" class="mb-2">
        <el-card shadow="none">
          <div ref="chartElRef2" style="width: 100%;height: 500px;"></div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" class="mb-2">
        <el-card shadow="none">
          <div ref="chartElRef3" style="width: 100%;height: 500px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page/index.js'
import Notice from "@/views/demo/component/echarts/Notice.vue";
import {useECharts} from "@/composables/useECharts.js";
import {onMounted} from "vue";
import {getLineOption1, getLineOption2, getLineOption3} from "@/views/demo/component/echarts/chartData.js";

export default {
  name: "bar",
  components: {PageWrapper, Notice},
  setup() {
    const {elRef: chartElRef1, setOptions: setOptions1} = useECharts();
    const {elRef: chartElRef2, setOptions: setOptions2} = useECharts();
    const {elRef: chartElRef3, setOptions: setOptions3} = useECharts();

    onMounted(() => {
      setOptions1(getLineOption1());
      setOptions2(getLineOption2());
      setOptions3(getLineOption3());
    })

    return {
      chartElRef1,
      chartElRef2,
      chartElRef3,
    }
  }
}
</script>

<style scoped>

</style>