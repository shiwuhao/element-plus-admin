<template>
  <BasicCard title="System Info">
    <el-descriptions
      class="mb-2"
      :column="1"
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
          带宽
        </template>
        100MB
      </el-descriptions-item>
    </el-descriptions>
  </BasicCard>
</template>

<script>
import {BasicCard} from '@/components/Card/index.js'

export default {
  name: "ServerStatus",
  components: {BasicCard},
}
</script>

<style scoped>

</style>