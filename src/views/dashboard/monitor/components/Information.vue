<template>
  <BasicCard title="System Info">
    <el-descriptions
      class="mb10"
      :column="2"
      border
    >
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-menu"></i>
          系统
        </template>
        CentOS 8.2.2004 x86_64(Py3.7.8)
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          内存
        </template>
        16GB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          硬盘
        </template>
        20TB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          CPU
        </template>
        <el-tag size="small">16核心</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-office-building"></i>
          Address
        </template>
        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions
      class="mb10"
      :column="2"
      border
    >
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-menu"></i>
          系统
        </template>
        CentOS 8.2.2004 x86_64(Py3.7.8)
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          内存
        </template>
        16GB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          硬盘
        </template>
        20TB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          CPU
        </template>
        <el-tag size="small">16核心</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-office-building"></i>
          Address
        </template>
        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions
      class="mb10"
      :column="2"
      border
    >
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-menu"></i>
          系统
        </template>
        CentOS 8.2.2004 x86_64(Py3.7.8)
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          内存
        </template>
        16GB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          硬盘
        </template>
        20TB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          CPU
        </template>
        <el-tag size="small">16核心</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions
      class="mb10"
      :column="2"
      border
    >
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-menu"></i>
          系统
        </template>
        CentOS 8.2.2004 x86_64(Py3.7.8)
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          内存
        </template>
        16GB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          硬盘
        </template>
        20TB
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          CPU
        </template>
        <el-tag size="small">16核心</el-tag>
      </el-descriptions-item>

    </el-descriptions>

    <div class="mt10" style="font-size: 12px;color: #cccccc;">Last updated 1 min ago</div>
  </BasicCard>
</template>

<script>
import {BasicCard} from '@/components/Card'
import {useECharts} from "@/composables/useECharts";
import {getThroughputData} from "../data";
import {onMounted} from "vue";

export default {
  name: "ServerStatus",
  components: {BasicCard},
  setup() {
    const {elRef, setOptions} = useECharts();

    onMounted(() => {
      setOptions(getThroughputData());
    })

    return {
      elRef,
    }
  }
}
</script>

<style scoped>

</style>