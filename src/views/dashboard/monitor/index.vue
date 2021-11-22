<template>
  <div class="m-2">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16" class="mb-2">
        <ServerStatus class="mb-2"/>
        <QueueStatus class="mb-2"/>
<!--        <Throughput/>-->
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="mb-2">
        <Information class="mb-2"/>
        <FailedJobs class="mb-2"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Information from "@/views/dashboard/monitor/components/Information.vue";
import ServerStatus from "@/views/dashboard/monitor/components/ServerStatus.vue";
import QueueStatus from "@/views/dashboard/monitor/components/QueueStatus.vue";
import FailedJobs from "@/views/dashboard/monitor/components/FailedJobs.vue";
import Throughput from "@/views/dashboard/monitor/components/Throughput.vue";
import {defineComponent} from 'vue';


export default defineComponent({
  components: {ServerStatus, QueueStatus, FailedJobs, Throughput, Information},
})
</script>