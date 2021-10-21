<template>
  <PageWrapper :title="$route['meta']['title']">
    <template #content>
      <span>默认1rem=16px;</span><br/>
      <span>1-6分别对应 0.25rem,0.5rem,0.75rem,1rem,1.25rem,1.5rem</span>
    </template>
    <el-card shadow="none">
      <h6>外边距</h6>
      <div>
        <div class="flex-row"><span class="label">四周</span><code>.m-1</code>&nbsp; --<code>.m-6</code></div>
        <div class="flex-row"><span class="label">左边距</span><code>.ml-1</code>--<code>.ml-6</code></div>
        <div class="flex-row"><span class="label">右边距</span><code>.mr-1</code>--<code>.mr-6</code></div>
        <div class="flex-row"><span class="label">上边距</span><code>.mt-1</code>--<code>.mt-6</code></div>
        <div class="flex-row"><span class="label">下边距</span><code>.mb-1</code>--<code>.mb-6</code></div>
        <div class="flex-row"><span class="label">左右边距</span><code>.mx-1</code>--<code>.mx-6</code></div>
        <div class="flex-row"><span class="label">上下边距</span><code>.my-1</code>--<code>.my-6</code></div>
      </div>

      <h6>内边距</h6>
      <div>
        <div class="flex-row"><span class="label">四周</span><code>.p-1</code>&nbsp; --<code>.p-6</code></div>
        <div class="flex-row"><span class="label">左边距</span><code>.pl-1</code>--<code>.pl-6</code></div>
        <div class="flex-row"><span class="label">右边距</span><code>.pr-1</code>--<code>.pr-6</code></div>
        <div class="flex-row"><span class="label">上边距</span><code>.pt-1</code>--<code>.pt-6</code></div>
        <div class="flex-row"><span class="label">下边距</span><code>.pb-1</code>--<code>.pb-6</code></div>
        <div class="flex-row"><span class="label">左右边距</span><code>.px-1</code>--<code>.px-6</code></div>
        <div class="flex-row"><span class="label">上下边距</span><code>.py-1</code>--<code>.py-6</code></div>
      </div>
    </el-card>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'

export default {
  name: "text",
  components: {PageWrapper},
}
</script>

<style scoped>
.label {
  display: flex;
  justify-content: flex-end;
  width: 80px;
  text-align: right;
}

code {
  color: red;
}
</style>