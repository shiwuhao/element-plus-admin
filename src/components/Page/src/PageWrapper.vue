<template>
  <div class="page-wrapper" :class="$props.class">
    <div class="page-header" v-if="title || subTitle || slotTitle || slotSubTitle">
      <div class="flex-row between">
        <div class="page-header-wrap flex-row start align-end">
          <div class="page-header-title text-xl">
            <slot name="title">{{ title }}</slot>
          </div>
          <div class="page-header-sub-title text-secondary text-xs ml-2">
            <slot name="sub-title">{{ subTitle }}</slot>
          </div>
        </div>
        <div>
          <slot name="extra"></slot>
        </div>
      </div>
      <div class="page-content">
        <slot name="content"> {{ content }}</slot>
      </div>
    </div>
    <div class="page-wrapper-content m-2"
         ref="contentRef"
         :class="{'content-bg' :$props.contentBackground}"
         :style="{minHeight:$props.contentFullHeight ? contentHeight+'px' : 'auto'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import {onMounted, ref, computed} from "vue";
import {useWindowSize,} from '@vueuse/core'
import {useSlots} from "vue";

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
    },
    class: {
      type: String,
      default: '',
    }
  },
  setup() {
    const contentRef = ref(null);
    const contentHeight = ref(null);
    const slotTitle = !!useSlots().title;
    const slotSubTitle = !!useSlots().subTitle;

    const resizeHeight = () => {
      const {height} = useWindowSize();
      contentHeight.value = height.value - contentRef.value.offsetTop - 22;
    }

    onMounted(() => {
      resizeHeight();
    })

    return {
      contentRef,
      contentHeight,
      slotTitle,
      slotSubTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  align-items: stretch;
  font-size: 14px;

  .page-header {
    flex: 1;
    padding: 16px;
    background-color: white;

    .page-header-wrap {
      .page-header-title {
        font-weight: bolder;
      }
    }
  }

  .page-content:not(:empty) {
    margin-top: .5rem;
  }

  .content-bg {
    background-color: white;
  }
}
</style>