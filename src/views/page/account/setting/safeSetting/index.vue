<template>
  <div class="safe-setting">
    <h2>安全设置</h2>
    <SettingWrapper :customTitle="customTitle" content="哈哈哈哈">
      <template #leftTitle>
        <div class="safe-setting-left">
          <span class="left-title">账户密码</span>
          <span class="left-description"> 当前密码强度：强</span>
        </div>
        <span class="right-operation">修改</span>
      </template>
    </SettingWrapper>
    <SettingWrapper :customTitle="customTitle">
      <template #leftTitle>
        <div class="safe-setting-left">
          <span class="left-title">密保手机</span>
          <span class="left-description"> 已绑定手机：138****8293</span>
        </div>
        <span class="right-operation">修改</span>
      </template>
    </SettingWrapper>
    <SettingWrapper :customTitle="customTitle">
      <template #leftTitle>
        <div class="safe-setting-left">
          <span class="left-title">密保问题</span>
          <span class="left-description">未设置密保问题，密保问题可有效保护账户安全</span>
        </div>
        <span class="right-operation">修改</span>
      </template>
    </SettingWrapper>
    <SettingWrapper :customTitle="customTitle">
      <template #leftTitle>
        <div class="safe-setting-left">
          <span class="left-title">备用邮箱</span>
          <span class="left-description">已绑定邮箱：ant***sign.com</span>
        </div>
        <span class="right-operation">修改</span>
      </template>
    </SettingWrapper>
    <SettingWrapper :customTitle="customTitle">
      <template #leftTitle>
        <div class="safe-setting-left">
          <span class="left-title">MFA 设备</span>
          <span class="left-description">未绑定 MFA 设备，绑定后，可以进行二次确认</span>
        </div>
        <span class="right-operation">修改</span>
      </template>
    </SettingWrapper>
  </div>
</template>
<script>
import {defineComponent, ref} from 'vue';
import SettingWrapper from "@/views/component/setting-wrapper/index";

export default defineComponent({
  components: {SettingWrapper},
  setup() {
    const customTitle = ref(true);
    return {
      customTitle
    }
  }
})
</script>
<style lang="scss" scoped>
.safe-setting {
  h2 {
    padding-left: 10px;
  }

  .safe-setting-left {
    display: inline-grid;

    .left-title {
      height: 30px;
      font-size: $font-size-small;
      color: $color-text-black
    }

    .left-description {
      color: $color-text-gray;
      font-size: $font-size-small;
      line-height: 45px;
    }
  }

  .right-operation {
    color: $color-text-blue;
    font-size: $font-size-small;
    margin-right: 2px;
  }
}

</style>