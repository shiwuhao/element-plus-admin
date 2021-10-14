<template>
  <BasicCard title="Server Status">
    <el-row>
      <el-col :xs="24">
        <div ref="elRef" style="height: 300px;width: 100%;"></div>
      </el-col>
      <el-col :span="12" :xs="24" class="mt10">
        <el-row>
          <el-col :span="8" :xs="6">
            <div ref="elRef2" style="height: 100px;width: 100%;"></div>
          </el-col>
          <el-col :span="16" :xs="18">
            <div style="font-size: 12px;color: #cccccc;">DISK USAGE</div>
            <div>
              <span>20.04GB / 256GB</span>
              <el-progress :text-inside="true" :stroke-width="5" :percentage="7"/>
            </div>
            <div style="font-size: 14px;color: #cccccc;">
              <div class="flex-row-justify">
                <span>/dev/disk1</span>
                <span>19.56GB</span>
              </div>
              <div class="flex-row-justify">
                <span>/dev/disk2</span>
                <span>23.56GB</span>
              </div>
            </div>
            <div class="mt10" style="font-size: 12px;color: #cccccc;">Last updated 1 min ago</div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" :xs="24" class="mt10">
        <el-row>
          <el-col :span="8" :xs="6">
            <div ref="elRef3" style="height: 100px;width: 100%;"></div>
          </el-col>
          <el-col :span="16" :xs="18">
            <div style="font-size: 12px;color: #cccccc;">BANDWIDTH</div>
            <div>
              <span>83.76GB / 10TB</span>
              <el-progress :text-inside="true" :stroke-width="5" :percentage="10"/>
            </div>
            <div style="font-size: 14px;color: #cccccc;">
              <div class="flex-row-justify">
                <span>HTTP</span>
                <span>35.47GB</span>
              </div>
              <div class="flex-row-justify">
                <span>FTP</span>
                <span>1.25GB</span>
              </div>
            </div>
            <div class="mt10" style="font-size: 12px;color: #cccccc;">Last updated 1 min ago</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="50" class="mt10">

    </el-row>
  </BasicCard>
</template>

<script>
import {BasicCard} from '@/components/Card'
import {useECharts} from "@/composables/useECharts";
import {getServerStatusData, getDiskStatusData} from "../data";
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