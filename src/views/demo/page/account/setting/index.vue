<template>
  <el-card class="setting-card m-2">
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
        <component :is="item.component"/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import {defineComponent, ref} from 'vue';
import BaseSetting from './baseSetting/BaseSetting.vue';
import SafeSetting from './safeSetting/SafeSetting.vue';
import AccountBind from './accountBind/AccountBind.vue';
import MsgNotify from './msgNotify/MsgNotify.vue';
import {settingList} from './data.js';
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";

export default defineComponent({
  components: {BaseSetting, SafeSetting, AccountBind, MsgNotify},
  setup() {
    const activeName = ref('1');
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
  .setting-tabs {
    :deep(.el-tabs__nav-wrap) {
      width: 224px;

      .el-tabs__nav {
        .el-tabs__item {
          text-align: left;
        }
      }
    }

    .setting-page {
      margin-top: 20px;
      padding-left: 18px;

      :deep(.el-descriptions) {
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
  }

  .mobile-setting-tabs {
    :deep(.el-tabs__nav-wrap) {
      width: 100%;
    }

  }
}


</style>