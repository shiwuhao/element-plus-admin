<template>
  <BasicCard title="Server Status">
    <el-row>
      <el-col :xs="24">
        <div ref="elRef" style="height: 300px;width: 100%;"></div>
      </el-col>
      <el-col :span="12" :xs="24" class="mt-2">
        <el-row :gutter="10">
          <el-col :span="8" :xs="6">
            <div ref="elRef2" style="height: 100px;width: 100%;"></div>
          </el-col>
          <el-col :span="16" :xs="18">
            <div class="text-xs text-secondary">DISK USAGE</div>
            <div class="mt-1">
              <span>20GB / 256GB</span>
              <el-progress class="mt-2" :text-inside="true" :stroke-width="5" :percentage="7"/>
            </div>
            <div class="text-sm text-secondary mt-1">
              <div class="flex-row between">
                <span>/dev/disk1</span>
                <span>19.56GB</span>
              </div>
              <div class="flex-row between">
                <span>/dev/disk2</span>
                <span>23.56GB</span>
              </div>
            </div>
            <div class="mt-2 text-xs text-secondary">Last updated 1 min ago</div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" :xs="24" class="mt-2">
        <el-row :gutter="10">
          <el-col :span="8" :xs="6">
            <div ref="elRef3" style="height: 100px;width: 100%;"></div>
          </el-col>
          <el-col :span="16" :xs="18">
            <div class="text-xs text-secondary">BANDWIDTH</div>
            <div class="mt-1">
              <span>83GB / 10TB</span>
              <el-progress class="mt-2" :text-inside="true" :stroke-width="5" :percentage="20"/>
            </div>
            <div class="text-sm text-secondary mt-1">
              <div class="flex-row between">
                <span>HTTP</span>
                <span>35.47GB</span>
              </div>
              <div class="flex-row between">
                <span>FTP</span>
                <span>12.25GB</span>
              </div>
            </div>
            <div class="mt-2 text-xs text-secondary">Last updated 1 min ago</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </BasicCard>
</template>

<script>
import {BasicCard} from '@/components/Card/index.js'
import {useECharts} from "@/composables/useECharts.js";
import {getServerStatusData, getDiskStatusData} from "../data.js";
import {onMounted} from "vue";

export default {
  name: "ServerStatus",
  components: {BasicCard},
  setup() {
    const {elRef, setOptions} = useECharts();
    const {elRef: elRef2, setOptions: setOptions2} = useECharts();
    const {elRef: elRef3, setOptions: setOptions3} = useECharts();

    onMounted(() => {
      setOptions(getServerStatusData());
      setOptions2(getDiskStatusData());
      setOptions3(getDiskStatusData())
    })

    return {
      elRef,
      elRef2,
      elRef3,
    }
  }
}
</script>

<style scoped>

</style>