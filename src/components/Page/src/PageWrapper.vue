<template>
  <div class="wrapper" :style="{backgroundColor:backgroundColor}">
    <div class="page-header">
      <div class="page-header-title flex-row-justify">
        <div>
          <span>{{ title }}</span>
          <span class="page-header-sub-title">{{ subTitle }}</span>
        </div>
        <div>
          <slot name="extra"></slot>
        </div>
      </div>
      <slot name="content">
        <div class="page-header-content" v-if="content">
          {{ content }}
        </div>
      </slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageWrapper",
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF',
    },
    backIcon: {
      type: [String, Boolean],
      default: 'el-icon-back',
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 16px;

  .page-header {
    .page-header-title {
      font-size: 20px;
      font-weight: bolder;

      .page-header-sub-title {
        padding-left: 14px;
        font-size: 12px;
        color: #cccccc;
      }
    }

    .page-header-content {
      padding-top: 12px;
      font-size: 14px;
    }
  }
}
</style>