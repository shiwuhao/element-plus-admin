<template>
  <el-collapse v-model="activeName">
    <el-collapse-item v-bind="{...$props,...$attrs}">
      <template #title v-if="customTitle">
          <div class="setting-wrap-custom">
            <slot name="icon"></slot>
            <slot name="leftTitle"></slot>
            <slot name="rightOperation"></slot>
          </div>
      </template>
      <div>{{content}}</div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import {defineComponent,ref} from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    //具体内容描述
    content: {
      type: String,
      default: ''
    },
    //是否手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String || Number,
      default: ''
    },
    //是否开启自定义标题
    customTitle: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const activeName = ref('1');
    return {
      activeName
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  padding: 15px;
}
.setting-wrap-custom {
  width: 100%;
  @include flex($justify-content:space-between)
}
</style>