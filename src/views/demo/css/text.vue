<template>
  <PageWrapper :title="$route['meta']['title']">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card shadow="none" header="字体大小">
          <p><code>.text-xs</code><span class="text-xs">  Supplementary text 12px Extra Small Build with Element</span>
          </p>
          <p><code>.text-sm</code><span class="text-sm"> Body (small) 13px Small Build with Element</span></p>
          <p><code>.text-df</code><span class="text-df"> Body 14px Base Build with Element</span></p>
          <p><code>.text-md</code><span class="text-md"> Small Title 16px Medium Build with Element</span></p>
          <p><code>.text-lg</code><span class="text-lg"> Title 18px Large Build with Element</span></p>
          <p><code>.text-xl</code><span class="text-xl"> Main Title 20px Extra Large Build with Element</span></p>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="none" header="字体颜色">
          <p><code>.text-primary</code><span class="text-primary">Primary Text #303133</span></p>
          <p><code>.text-regular</code><span class="text-regular">Regular Text #606266</span></p>
          <p><code>.text-secondary</code><span class="text-secondary">Secondary Text #909399</span></p>
          <p><code>.text-placeholder</code><span class="text-placeholder">Placeholder Text #C0C4CC</span></p>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="none" header="隐藏溢出">
          <div class="flex row-left">
            <code>.text-overflow-l1</code>
            <p class="text-overflow-l1">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-l2</code>
            <p class="text-overflow-l2">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-l3</code>
            <p class="text-overflow-l3">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-l4</code>
            <p class="text-overflow-l4">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-l5</code>
            <p class="text-overflow-l5">{{ text }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'
import {reactive, toRefs} from "vue";

export default {
  name: "text",
  components: {PageWrapper},
  setup() {
    const state = reactive({
      text: 'Element Plus uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea. We provide four ways to change the style variables.Element Plus uses BEM-styled CSS so that you can override styles easily. But if you need to replace styles at a large scale, e.g. change the theme color from blue to orange or green, maybe overriding them one by one is not a good idea. We provide four ways to change the style variables.'
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
code {
  color: red;
  margin-right: 10px;
  min-width: 150px;
}
</style>