<template>
  <page-wrapper
    class="page"
    :title="$route['meta']['title']"
    content-background
    content-full-height
  >
    <template #extra>
      <el-button type="primary" size="mini">按钮1</el-button>
      <el-button type="primary" size="mini">按钮2</el-button>
      <el-button type="primary" size="mini">按钮3</el-button>
    </template>
    <template #content>
      <div class="text-sm text-secondary">
        内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情
      </div>
    </template>
    <div class="p-5">
      <el-descriptions title="基本信息" :column="getIsMobile ? 1: 3" border>
        <el-descriptions-item label="姓名" :width="80">shiwuhao</el-descriptions-item>
        <el-descriptions-item label="手机号" :width="80">18100000000</el-descriptions-item>
        <el-descriptions-item label="性别" :width="80">男</el-descriptions-item>
        <el-descriptions-item label="年龄" :width="80">18</el-descriptions-item>
        <el-descriptions-item label="用户ID" :width="80">12345678</el-descriptions-item>
        <el-descriptions-item label="居住地" :width="80">苏州市</el-descriptions-item>
        <el-descriptions-item label="用户来源" :width="80">微信</el-descriptions-item>
        <el-descriptions-item label="注册时间" :width="80">2021-11-11 11:11:11</el-descriptions-item>
        <el-descriptions-item label="备注" :width="80">
          <el-tag size="small">学生</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :width="80">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
      <br/>
      <el-descriptions title="认证信息" :column="getIsMobile ? 1: 3" border>
        <el-descriptions-item label="认证状态" :width="80">已认证</el-descriptions-item>
        <el-descriptions-item label="认证时间" :width="80">2021-12-12 12:12:12</el-descriptions-item>
        <el-descriptions-item label="额度激活状态" :width="80">已激活</el-descriptions-item>
        <el-descriptions-item label="授信额度" :width="80">10000元</el-descriptions-item>
        <el-descriptions-item label="可用额度" :width="80">10000元</el-descriptions-item>
        <el-descriptions-item label="逾期天数" :width="80">3天</el-descriptions-item>
      </el-descriptions>
      <br/>
      <el-descriptions title="会员信息" :column="getIsMobile ? 1: 3" border>
        <el-descriptions-item label="会员等级" :width="80">VIP3</el-descriptions-item>
        <el-descriptions-item label="会员积分" :width="80">2380</el-descriptions-item>
        <el-descriptions-item label="会员有效期" :width="80">2022-12-12 12:12:12</el-descriptions-item>
      </el-descriptions>
    </div>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page';
import {useRootSetting} from "@/composables/setting/useRootSeeting";

export default {
  name: "index",
  components: {PageWrapper},
  data() {
    const {getIsMobile} = useRootSetting();
    return {
      getIsMobile,
      activeName: 'first',
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  :deep(.wrapper) {
    //padding-bottom: 0 !important;
  }
}
</style>