<template>
  <page-wrapper
  title="一级标题"
  sub-title="二级标题"
  content="详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面详情页面"
  background-color="#FFF"
  >
    <template #extra>
      <el-button type="primary" size="mini">按钮1</el-button>
      <el-button type="primary" size="mini">按钮1</el-button>
      <el-button type="primary" size="mini">按钮1</el-button>
    </template>

  </page-wrapper>
<!--  <el-page-header icon="el-icon-arrow-left" content="详情页面">-->
<!--    <el-card class="m10" title="系统配置" :header="$route.meta.title">-->
<!--      <el-page-header @back="goBack" content="详情页面">-->
<!--      </el-page-header>-->
<!--      <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--        <el-tab-pane label="列表" name="first">-->
<!--          <table-list></table-list>-->
<!--        </el-tab-pane>-->
<!--        <el-tab-pane label="航向" name="second">-->
<!--          <tab-list></tab-list>-->
<!--        </el-tab-pane>-->
<!--      </el-tabs>-->

<!--    </el-card>-->
<!--  </el-page-header>-->

</template>

<script>
import PageWrapper from "@/components/Page/src/PageWrapper";
import TableList from "@/views/system/configs/TableList";
import TabList from "@/views/system/configs/TabList";

export default {
  name: "list",
  components: {PageWrapper,TableList,TabList},
  data() {
    return {
      activeName: 'second',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>