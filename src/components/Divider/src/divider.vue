<template>
  <div class="basic-divider">
    <div class="divider-content">
      <i :class="iconName" class="divider-iconName" :style="{color:color}"></i>
      <span class="divider-title">{{ title }}</span>
    </div>
    <el-divider
      :content-position="contentPosition"
      :direction="direction">
      {{ text }}
    </el-divider>
  </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'basic-divider',
  props: {
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
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.basic-divider {
  display: flex;
  .divider-iconName {
    margin-right: 3px;
    margin-left: 10px;
  }
  .divider-title {
    margin-right: 10px;
  }src/components/Divider/
}
</style>