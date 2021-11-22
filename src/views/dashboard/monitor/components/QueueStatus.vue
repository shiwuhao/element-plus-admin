<template>
  <BasicCard title="Queue Status">
    <el-row :gutter="10">
      <el-col :span="24" class="mb-2">
        <el-row>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" v-for="(item,index) in queueStatus" :key="index">
            <el-card class="card" shadow="hover">
              <div class="flex row-center col-center">
                <span class="text-sm text-secondary text-overflow">{{ item.label }}</span>
                <span class="text-xl">{{ item.value }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24">
        <BasicTable :columns="tableColumn" :data="tableData"></BasicTable>
      </el-col>
    </el-row>
  </BasicCard>
</template>

<script>
import {BasicTable} from '@/components/Table/index.js'
import {BasicCard} from '@/components/Card/index.js'
import {shallowReactive, toRefs} from "vue";

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
      ],
      queueStatus: [
        {label: 'JOBS PER MINUTE', value: 117},
        {label: 'JOBS PAST HOUR', value: '5,808'},
        {label: 'FAILED JOBS', value: '701'},
        {label: 'STATUS', value: 'Active'},
        {label: 'TOTAL PROCESSES', value: '14'},
        {label: 'MAX WAIT TIME', value: '--'},
        {label: 'MAX RUNTIME', value: 'First'},
        {label: 'MAX THROUGHPUT', value: 'First'},
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