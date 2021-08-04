<template>
  <page-wrapper
    class="page mb10"
    title="一级标题"
    sub-title="二级标题"
    background-color="#FFF"
  >
  </page-wrapper>

  <el-sapce direction="vertical"></el-sapce>
  <page-wrapper
    class="page"
    title="自定义slot"
    sub-title="二级标题"
    content="内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情"
    background-color="#FFF"
  >
    <template #extra>
      <el-button type="primary" size="mini">按钮1</el-button>
      <el-button type="primary" size="mini">按钮2</el-button>
      <el-button type="primary" size="mini">按钮3</el-button>
    </template>
  </page-wrapper>
</template>

<script>
import PageWrapper from "@/components/Page/src/PageWrapper";

export default {
  name: "index",
  components: {PageWrapper},
  data() {
    return {
      activeName: 'first',
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  ::v-deep.wrapper {
    //padding-bottom: 0 !important;
  }
}
</style>