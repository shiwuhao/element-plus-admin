<template>
  <div class="basic-divider">
    <div class="divider-content">
      <el-tooltip class="item" effect="dark"  placement="top-start" v-bind="{...$props,...$attrs}">
         <i :class="iconName" class="divider-iconName" :style="{color:color}"></i>
      </el-tooltip>
      <span class="divider-title">{{ title }}</span>
    </div>
    <el-divider v-bind="{...$props,...$attrs}">
      {{ text }}
    </el-divider>
  </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'basic-divider',
  props: {
    disabled: {
      type: Boolean,
      default: true
    },
    iconName:{
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    contentPosition: {
      type: String,
      default: 'center'
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    tipContent: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.basic-divider {
  @include flex;
  .divider-content {
    padding: 0 10px
  }
}
</style>