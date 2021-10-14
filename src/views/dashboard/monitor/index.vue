<template>
  <div class="m10">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16" class="mb10">
        <ServerStatus/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="mb10">
        <Information/>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="mb10">
        <QueueStatus/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="mb10">
        <FailedJobs/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="mb10">
        <Throughput/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Information from "@/views/dashboard/monitor/components/Information";
import ServerStatus from "@/views/dashboard/monitor/components/ServerStatus";
import QueueStatus from "@/views/dashboard/monitor/components/QueueStatus";
import FailedJobs from "@/views/dashboard/monitor/components/FailedJobs";
import Throughput from "@/views/dashboard/monitor/components/Throughput";
import {defineComponent} from 'vue';


export default defineComponent({
  components: {ServerStatus, QueueStatus, FailedJobs, Throughput, Information},
  setup() {

    return {}
  }
})
</script>