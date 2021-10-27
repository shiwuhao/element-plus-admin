<template>
  <PageWrapper :title="$route['meta']['title']">
  <el-card shadow="none" class="m-2">
    <el-tabs :tab-position="getIsMobile ? 'top' : 'left'" v-model="tabActive">
      <el-tab-pane v-for="item in tabs" :label="item.label" :name="item.value" :key="item.value">
        <component :is="item.component"/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
  </PageWrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'
import BaseSetting from "./BasicSetting";
import SecureSetting from "./SecureSetting";
import AccountBind from "./AccountBind";
import MsgNotify from "./MsgNotify";
import {reactive, toRefs} from "vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting";

export default {
  name: "index",
  components: {PageWrapper,BaseSetting, SecureSetting, AccountBind,MsgNotify},
  setup() {
    const state = reactive({
      tabActive: '1',
      tabs: [
        {label: '基本设置', value: '1', component: 'BaseSetting'},
        {label: '安全设置', value: '2', component: 'SecureSetting'},
        {label: '账户绑定', value: '3', component: 'AccountBind'},
        {label: '消息通知', value: '4', component: 'MsgNotify'},
      ],
    });

    const {getIsMobile} = useRootSetting();

    return {
      ...toRefs(state),
      getIsMobile,
    }
  },
}
</script>

<style scoped>

</style>