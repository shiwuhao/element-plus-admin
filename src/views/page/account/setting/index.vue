<template>
  <el-card class="setting-card">
    <el-tabs :class="getIsMobile?'mobile-setting-tabs':'setting-tabs'"
             :tab-position="getIsMobile?'top':'left'"
             v-model="activeName"
    >
      <el-tab-pane
        v-for="item in settingList"
        :key="item.key"
        :label="item.name"
        :name="item.key"
      >
        <component :is="item.component" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import {defineComponent, ref} from 'vue';
import BaseSetting from './baseSetting/baseSetting';
import SafeSetting from './safeSetting/safeSetting';
import AccountBind from './accountBind/accountBind';
import MsgNotify from './msgNotify/msgNotify';
import {settingList} from './data';
import {useRootSetting} from "@/composables/setting/useRootSeeting";
export default defineComponent({
  components: {BaseSetting, SafeSetting,AccountBind,MsgNotify},
  setup() {
    const activeName = ref('4');
    const {getIsMobile} = useRootSetting();
    return {
      activeName,
      settingList,
      getIsMobile
    }
  }
})
</script>
<style lang="scss" scoped>
.setting-card {
  margin: 24px;

  .setting-tabs {

    ::v-deep .el-tabs__nav-wrap {
      width: 224px;

      .el-tabs__nav {
        .el-tabs__item {
          text-align: left;
        }
      }
    }
  }
  .mobile-setting-tabs {
    ::v-deep .el-tabs__nav-wrap {
      width: 100%;
    }
  }
}
.setting-page {
  margin-top: 20px;
  padding-left: 18px;
  //margin: -16px 0 0 26px;
  ::v-deep .el-descriptions {
    margin-bottom: 40px;

    .el-descriptions__header {
      height: 0;

      .el-descriptions__title {
        font-size: $font-size-small;
        color: $color-text-black
      }

    }
    .el-descriptions__body {
      border-bottom: 1px solid $color-border-dashed;
      padding-bottom: 14px;
    }
    .is-left {
      color: $color-text-gray;
      font-size: $font-size-small;
    }
    .el-descriptions-title {
      color: $color-text-blue;
      font-size: $font-size-small;
      cursor: pointer;
    }
  }
}
</style>