<template>
  <div class="tag-view">
    <scroll-panel class="scroll-container" ref="scrollPane">
      <el-tag
        class="tag-item"
        :ref="setTagRef"
        v-for="item in visitedViews"
        :key="item.path"
        :route="item"
        :type="isActive(item) ? '' : 'info'"
        :closable="!(item.meta && item.meta.affix)"
        :effect="isActive(item) ? 'dark' : 'light'"
        size="small"
        @close="closeTagView(item)"
        @click="clickTagView(item)"
        @contextmenu.prevent="openContextmenu(item)"
        v-contextmenu:contextmenu
      >
        {{ item.title }}
      </el-tag>
    </scroll-panel>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="refreshSelectedTag(selectedTag)">刷新</v-contextmenu-item>
      <v-contextmenu-item v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</v-contextmenu-item>
      <v-contextmenu-item @click="closeOthersTags(selectedTag)">关闭其他</v-contextmenu-item>
      <v-contextmenu-item @click="closeAllTags(selectedTag)">关闭所有</v-contextmenu-item>
    </v-contextmenu>
  </div>
</template>
<script>
import scrollPanel from "./scrollPanel";
import path from 'path';
import {mapGetters} from 'vuex';

export default {
  name: 'TagView',
  components: {
    scrollPanel,
  },
  data() {
    return {
      selectedTag: {},
      affixTags: [],
      tagRefs: [],
    }
  },
  computed: {
    ...mapGetters(['visitedViews', 'routes']),
  },
  watch: {
    $route() {
      this.addTagView();
      this.moveToCurrentTagView();
    },
  },
  mounted() {
    this.initTagViews();
    this.addTagView()
  },
  beforeUpdate() {
    this.tagRefs = []
  },
  methods: {
    setTagRef(el) {
      if (el) this.tagRefs.push(el);
    },
    // 初始化标签视图
    initTagViews() {
      const affixTags = this.affixTags = this.filterAffixTags(this.routes);
      for (const tag of affixTags) {
        tag.name && this.$store.dispatch('tagView/addVisitedView', tag);
      }
    },
    // 添加标签视图
    addTagView() {
      this.$route.name && this.$store.dispatch('tagView/addView', this.$route);
    },
    // 关闭标签视图
    closeTagView(tagView) {
      this.$store.dispatch('tagView/delView', tagView).then(({visitedViews}) => {
        if (this.isActive(tagView)) {
          this.toLastTagView(visitedViews, tagView);
        }
      })
    },
    // 标签视图点击事件
    clickTagView({path, fullPath}) {
      if (path === this.$route.path) return;
      // this.$router.replace({path: '/redirect' + fullPath});
      this.$router.push({path: fullPath});
    },
    // 判断tag是否激活状态
    isActive(route) {
      return route.path === this.$route.path;
    },
    // 判断标签是否需要固定
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    // 过滤需要固定的标签
    filterAffixTags(routes, basePath = '/') {
      let tags = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({fullPath: tagPath, path: tagPath, name: route.name, meta: {...route.meta}})
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      });
      return tags
    },
    // 开启右键菜单
    openContextmenu(tag) {
      this.selectedTag = tag;
    },
    // 刷新选中标签页面
    refreshSelectedTag(selectTagView) {
      this.$store.dispatch('tagView/delCachedView', selectTagView).then(() => {
        const {fullPath} = selectTagView;
        this.$nextTick(() => {
          this.$router.replace({path: '/redirect' + fullPath});
        })
      })
    },
    // 关闭选中标签页面
    closeSelectedTag(selectTagView) {
      this.$store.dispatch('tagView/delView', selectTagView).then(({visitedViews}) => {
        if (this.isActive(selectTagView)) {
          this.toLastTagView(visitedViews, selectTagView)
        }
      })
    },
    // 关闭其他标签
    closeOthersTags(selectTagView) {
      if (selectTagView.fullPath !== this.$route.fullPath) this.$router.push(selectTagView);
      this.$store.dispatch('tagView/delOtherViews', selectTagView).then(() => {
        this.moveToCurrentTagView();
      })
    },
    // 关闭所有标签
    closeAllTags(selectTagView) {
      this.$store.dispatch('tagView/delAllViews').then(({visitedViews}) => {
        if (this.affixTags.some(tag => tag.path === selectTagView.path)) {
          return
        }
        this.toLastTagView(visitedViews, selectTagView)
      })
    },
    // 跳转到最后一个标签视图
    toLastTagView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        if (view.name === 'Dashboard') {
          this.$router.replace({path: '/redirect' + view.fullPath})
        } else {
          this.$router.push('/')
        }
      }
    },
    // 移动到当前路由所在标签也面
    moveToCurrentTagView() {
      const tags = this.tagRefs;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.$attrs.route.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)
            if (tag.$attrs.route.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('tagView/updateVisitedView', this.$route)
            }
            break
          }
        }
      })
    },
  }
};
</script>
<style lang="scss" scoped>
.tag-view {
  background: white;
  //box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  border-bottom: 1px solid #E4E7ED;
  height: 30px;
  text-align: left;
  padding: 0 10px;

  .scroll-container {
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
