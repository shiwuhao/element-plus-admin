<template>
  <el-card shadow="none">
    <div class="card-header flex-row-justify">
      <span>{{ title }}</span>
      <el-tooltip effect="dark" :content="notice" placement="top">
        <el-icon style="cursor: pointer">
          <info-filled/>
        </el-icon>
      </el-tooltip>
    </div>
    <div class="card-body">
      <slot name="default"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </el-card>
</template>

<script>
import {InfoFilled} from '@element-plus/icons'

export default {
  name: "BasicCard",
  props: ['title', 'notice'],
  components: {InfoFilled}
}
</script>

<style lang="scss" scoped>
.card-header {
  font-size: 14px;
  color: #909399
}

.card-body {
  padding: 10px 0;
  font-size: 30px;
  font-weight: bolder
}

.card-footer {
  font-size: 12px;
  color: #909399;
}
</style>