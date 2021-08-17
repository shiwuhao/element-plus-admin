<template>
  <div class="drawer-container">
    <el-drawer
      v-bind="{...$props,...$attrs}"
      @close="drawerClose">
      <template #title>
        <div class="drawer__title" ref="headerRef">
          <slot name="title">{{ $attrs.tinputValueitle }}</slot>
        </div>
      </template>
      <template #default>
        <el-scrollbar :height="getScrollHeight">
          <div class="drawer__content">
            <slot name="default"></slot>
          </div>
        </el-scrollbar>
        <div class="drawer__footer" ref="footerRef">
          <slot name="footer"></slot>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script>
import {reactive, toRefs, ref, onMounted, computed, unref} from "vue";
import {useElementBounding, useWindowSize} from '@vueuse/core'

export default {
  name: "BasicDrawer",

  setup(props, {emit}) {
    const headerRef = ref(null);
    const footerRef = ref(null);
    let getScrollHeight = ref('');

    const drawerClose = () => emit('update:modelValue', false);

    onMounted(() => {
      const {height: windowHeight} = useWindowSize();
      const {height: headerHeight} = useElementBounding(headerRef);
      const {height: footerHeight} = useElementBounding(footerRef);
      getScrollHeight.value = unref(windowHeight) - unref(headerHeight) - unref(footerHeight) + 'px';
    })

    return {
      drawerClose,
      headerRef,
      footerRef,
      getScrollHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  ::v-deep .el-drawer {
    .drawer__title {
      font-weight: bolder;
      font-size: 18px;
      padding: 10px;
    }

    .el-drawer__header {
      margin-bottom: 0;
      border-bottom: 1px solid #EEEEEF;
    }

    .drawer__content {
      padding: 10px;
      margin-bottom: 80px;
    }

    .drawer__footer {
      z-index: 1001;
      background-color: white;
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
      padding-right: 20px;
      height: 45px;
      line-height: 45px;
      width: 100%;
      border-top: 1px solid #EEEEEF;
    }
  }
}


</style>