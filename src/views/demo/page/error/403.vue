<template>
  <page-wrapper contentBackground contentFullHeight class="container">
    <div class="wrap">
      <icon name="icon-403" size="250"/>
      <div class="flex-col between p-5 ml-5">
        <h1 class="title-level1">抱歉!</h1>
        <h2 class="title-level2">您没有操作权限</h2>
        <span class="title-level3">当前帐号没有操作权限，请联系管理员</span>
        <el-button class="action" type="primary" @click="goHome">返回首页</el-button>
      </div>
    </div>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'
import {useRouter} from "vue-router";

export default {
  name: 'Page403',
  components: {PageWrapper},
  setup() {
    const {push} = useRouter();
    const goHome = () => push({path: '/'})
    return {
      goHome,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  :deep(.page-wrapper-content) {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }
  }

  .title-level1 {
    font-size: xx-large;
    color: var(--el-color-primary);
    font-weight: var(--el-font-weight-primary);
    line-height: var(--el-font-line-height-primary);
  }

  .title-level2 {
    font-size: large;
    color: var(--el-text-color-regular);
  }

  .title-level3 {
    font-size: small;
    color: var(--el-text-color-regular);
  }

  .action {
    margin-top: 50px;
  }
}

</style>
