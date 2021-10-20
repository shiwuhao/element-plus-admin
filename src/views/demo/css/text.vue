<template>
  <PageWrapper :title="$route['meta']['title']">
    <el-card shadow="none">
      <el-row :gutter="10">
        <el-col :span="8">
          <h6>文本大小</h6>
          <p><code>.text-xs</code><span class="text-xs">  Supplementary text 8px Extra Small Build with Element</span>
          </p>
          <p><code>.text-sm</code><span class="text-sm"> Body (small) 13px Small Build with Element</span></p>
          <p><code>.text-df</code><span class="text-df"> Body 14px Base Build with Element</span></p>
          <p><code>.text-md</code><span class="text-md"> Small Title 16px Medium Build with Element</span></p>
          <p><code>.text-lg</code><span class="text-lg"> Title 18px Large Build with Element</span></p>
          <p><code>.text-xl</code><span class="text-xl"> Main Title 20px Extra Large Build with Element</span></p>
        </el-col>
        <el-col :span="8">
          <h6>字体颜色</h6>
          <p><code>.text-primary</code><span class="text-primary">Primary Text #303133</span></p>
          <p><code>.text-regular</code><span class="text-regular">Regular Text #606266</span></p>
          <p><code>.text-secondary</code><span class="text-secondary">Secondary Text #909399</span></p>
          <p><code>.text-placeholder</code><span class="text-placeholder">Placeholder Text #C0C4CC</span></p>
        </el-col>
        <el-col :span="8">
          <h6>隐藏溢出</h6>
          <div class="flex row-left">
            <code>.text-overflow-1</code>
            <p class="text-overflow-1">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-2</code>
            <p class="text-overflow-2">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-3</code>
            <p class="text-overflow-3">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-4</code>
            <p class="text-overflow-4">{{ text }}</p>
          </div>
          <div class="flex row-left">
            <code>.text-overflow-5</code>
            <p class="text-overflow-5">{{ text }}</p>
          </div>
        </el-col>
      </el-row>
    </el-card>
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