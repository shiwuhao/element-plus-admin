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

      <div class="page-header-content">
        <slot name="content"> {{ content }}</slot>
      </div>
    </div>
    <div class="page-wrapper-content"
         ref="contentRef"
         :class="{'content-bg' :$props.contentBackground}"
         :style="{minHeight:$props.contentFullHeight ? contentHeight+'px' : 'auto'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import {onMounted, ref} from "vue";
import {useWindowSize} from '@vueuse/core'

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
    contentBackground: {
      type: Boolean,
      default: false,
    },
    contentFullHeight: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    const contentRef = ref(null);
    let contentHeight = ref(null);

    onMounted(() => {
      const {height} = useWindowSize();
      contentHeight.value = height.value - contentRef.value.offsetTop - 22;
    })

    return {
      contentRef,
      contentHeight,
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  align-items: stretch;

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

  .page-header-content:not(:empty) {
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