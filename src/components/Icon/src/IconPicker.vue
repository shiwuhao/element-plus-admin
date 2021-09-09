<template>
  <div class="el-icon-popover" @click="showPop(false)" ref="popover">
    <el-popover
      v-model:visible="visible"
      v-bind="{...$props,...$attrs}"
    >
      <template #reference>
        <el-input
          v-model="iconName"
          ref="input"
          v-bind="{...$props,...$attrs}"
        >
          <template #prepend>
            <i :class="iconName"></i>
          </template>
        </el-input>
      </template>
      <el-scrollbar
        ref="el-icon-scrollbar"
        class="el-icon-scrollbar"
        v-bind="{...$props,...$attrs}"
      >
        <ul
          class="el-icon-list"
          v-if="icons && icons.length > 0"
        >
          <li
            v-for="(item, index) in icons"
            :key="index"
            @click="selectedIcon(item)"
          >
            <i :class="item"></i>
          </li>
        </ul>
        <el-empty v-bind="{...$props,...$attrs}" v-else></el-empty>
      </el-scrollbar>
    </el-popover>
  </div>

</template>

<script>
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue';
import {iconPickerProps} from "./props";

export default defineComponent({
  props: iconPickerProps,
  setup(props, {emit}) {
    const visible = ref(false);
    const iconName = ref('');
    const {iconList = []} = toRefs(props);
    const icons = iconList.value;
    const popover = ref(null);
    //icon选中事件
    const selectedIcon = (item) => {
      iconName.value = item;
      visible.value = false;
    };
    //外层div手动激活popover事件
    const showPop = () => {
      visible.value = true;
    };
    //隐藏icon下拉列表事件
    const hidePanel = (e) => {
      if (!popover.value.contains(e.target)) {
        showPop.value = false;
        visible.value = false;
      }
    }
    onMounted(() => {
      //监听点击空白处非本身元素，关闭popover和最外层div
      document.addEventListener('click', (e) => {
        hidePanel(e)
      })
    });
    return {
      visible,
      selectedIcon,
      showPop,
      iconName,
      icons,
      hidePanel,
      popover
    };
  },
});
</script>
<style lang="scss" scoped>
.el-icon-list {
  @include flex($wrap: wrap);
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    padding: 6px 10px;
    font-size: 20px;
  }
}

.el-icon-scrollbar {
  @include flex($justify-content: center)
}
</style>
