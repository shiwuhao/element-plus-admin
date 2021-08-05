<template>
  <div class="page-wrapper">
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

      <div class="page-header-content" v-if="content">
        <slot name="content"> {{ content }}</slot>
      </div>
    </div>
    <div class="page-wrapper-content" :class="getContentClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import {computed} from "vue";

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
    contentBackground: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: StaticRange,
      default: '',
    },
    backIcon: {
      type: [String, Boolean],
      default: 'el-icon-back',
    },
  },
  setup(props) {

    const getContentClass = computed(() => {
      const {contentClass, contentBackground} = props;
      return [
        contentClass,
        {'content-bg': contentBackground}
      ]
    });

    return {
      getContentClass
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  align-items:stretch;
  .page-header {
    flex: 1;
    padding: 16px;
    background-color: white;

    .page-header-title {
      font-size: 20px;
      font-weight: bolder;

      .page-header-sub-title {
        padding-left: 14px;
        font-size: 12px;
        color: #cccccc;
      }
    }

  }

  .page-header-content {
    padding-top: 12px;
    font-size: 14px;
  }

  .page-wrapper-content {
    margin: 16px;
  }

  .content-bg {
    background-color: white;
  }
}
</style>