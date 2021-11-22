<template>
  <BasicCard title="Failed Jobs">
    <BasicTable :columns="tableColumn" :data="tableData" size="small">
      <template #action="scope">
        <el-button type="primary">
          <el-icon :size="14">
            <Refresh/>
          </el-icon>
        </el-button>
      </template>
    </BasicTable>
  </BasicCard>
</template>

<script>
import {BasicTable} from '@/components/Table/index.js'
import {BasicCard} from '@/components/Card/index.js'
import {Refresh} from '@element-plus/icons'
import {shallowReactive, toRefs} from "vue";

export default {
  name: "FailedJobs",
  components: {BasicCard, BasicTable, Refresh},
  setup() {
    const state = shallowReactive({
      tableColumn: [
        {prop: 'job', label: 'Job', minWidth: 90},
        {prop: 'runtime', label: 'Runtime', minWidth: 70},
        {prop: 'failed_at', label: 'Failed At', minWidth: 110},
        {prop: 'action', label: 'Action', slot: 'action', minWidth: 80},
      ],
      tableData: [
        {job: 'SendSms', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'SendSms', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'CallTask', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'SendPush', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'Callback', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'Callback', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'SendSms', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'SendSms', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'CallTask', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'SendPush', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'Callback', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
        {job: 'Callback', runtime: '4', failed_at: '10-14 16:23:09', Retry: 'A Few Seconds'},
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