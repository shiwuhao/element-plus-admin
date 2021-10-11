<template>
  <div class="tag-view">
    <el-scrollbar ref="scrollbarRef">
      <div class="scroll-container flex-row-left">
        <el-tag
          class="tag-item"
          :ref="(el) => el && getViewRefs.push(el)"
          v-for="item in getVisitedViews"
          :key="item.path"
          :route="item"
          :type="viewIsActive(item) ? '' : 'info'"
          :closable="!(item.meta && item.meta.affix)"
          :effect="viewIsActive(item) ? 'dark' : 'light'"
          size="small"
          @close="closeView(item)"
          @click="goView(item)"
          @contextmenu.prevent="getSelectView = item"
          v-contextmenu:contextmenu
        >
          {{ item.title }}
        </el-tag>
      </div>
    </el-scrollbar>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="refreshView(getSelectView)">刷新</v-contextmenu-item>
      <v-contextmenu-item v-if="!viewIsAffix(getSelectView)" @click="closeView(getSelectView)">关闭</v-contextmenu-item>
      <v-contextmenu-item @click="closeOtherView(getSelectView)">关闭其他</v-contextmenu-item>
      <v-contextmenu-item @click="closeAllView(getSelectView)">关闭所有</v-contextmenu-item>
    </v-contextmenu>
  </div>
</template>
<script>
import {useTagView} from "@/layouts/tagview/useTagView";
import {toRefs} from "vue";

export default {
  name: 'TagView',
  setup() {
    const tagView = useTagView();
    return {
      ...toRefs(tagView),
    }
  }
};
</script>
<style lang="scss" scoped>
.tag-view {
  background: white;
  border-bottom: 1px solid #E4E7ED;
  height: 30px;
  text-align: left;
  padding: 0 10px;

  .scroll-container {
    height: 30px;
    background: white;
    line-height: 27px;

    .tag-item {
      margin: 0 2px;
      cursor: pointer;
      font-weight: bolder;
      user-select: none;
    }
  }
}

.v-contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

  li.v-contextmenu-item {
    font-size: 12px;
    margin: 0;
    padding: 5px 16px;
    cursor: pointer;

    &:hover {
      background: #409EFF;
    }
  }
}
</style>
