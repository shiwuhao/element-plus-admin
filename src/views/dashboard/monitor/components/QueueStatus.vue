<template>
  <BasicCard title="Queue Status">
    <el-row :gutter="10">
      <el-col :span="12" class="mb10">
        <BasicCard title="JOBS PER MINUTE">
          117
        </BasicCard>
      </el-col>
      <el-col :span="12" class="mb10">
        <BasicCard title="JOBS PAST HOUR">
          5,805
        </BasicCard>
      </el-col>
      <el-col :span="12" class="mb10">
        <BasicCard title="STATUS">
          Active
        </BasicCard>
      </el-col>
      <el-col :span="12" class="mb10">
        <BasicCard title="TOTAL PROCESSES">
          14
        </BasicCard>
      </el-col>
      <el-col :span="12" class="mb10">
        <BasicCard title="TOTAL PROCESSES">
          14
        </BasicCard>
      </el-col>
      <el-col :span="12" class="mb10">
        <BasicCard title="TOTAL PROCESSES">
          14
        </BasicCard>
      </el-col>
      <el-col :span="24">
        <BasicTable :columns="tableColumn" :data="tableData"></BasicTable>
      </el-col>
    </el-row>
  </BasicCard>
</template>

<script>
import {BasicTable} from '@/components/Table'
import {BasicCard} from '@/components/Card'
import {useECharts} from "@/composables/useECharts";
import {getServerStatusData, getDiskStatusData} from "../data";
import {onMounted, shallowReactive, toRefs} from "vue";

export default {
  name: "ServerStatus",
  components: {BasicCard, BasicTable},
  setup() {
    const state = shallowReactive({
      tableColumn: [
        {prop: 'queue', label: 'Queue', minWidth: 100},
        {prop: 'processes', label: 'Processes', minWidth: 80},
        {prop: 'jobs', label: 'Jobs', minWidth: 100},
        {prop: 'wait', label: 'Wait', minWidth: 120},
      ],
      tableData: [
        {queue: 'default', processes: '4', jobs: 1000, wait: 'A Few Seconds'},
        {queue: 'hot', processes: '5', jobs: 5000, wait: 'A Few Seconds'},
        {queue: 'promotion', processes: '6', jobs: 1000, wait: 'A Few Seconds'},
        {queue: 'first', processes: '8', jobs: 2000, wait: 'A Few Seconds'},
        {queue: 'second', processes: '8', jobs: 2000, wait: 'A Few Seconds'},
      ]
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>

</style>