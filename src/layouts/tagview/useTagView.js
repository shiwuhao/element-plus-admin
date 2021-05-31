import path from "path";
import store from "@/store";
import {useRouter} from "vue-router";
import {computed, nextTick, ref, unref} from 'vue';

export function useTagView() {

  const {getters, dispatch} = store;
  const {push, replace, currentRoute, getRoutes} = useRouter();

  const getViewRefs = ref([]);
  const getSelectView = ref();
  const getVisitedViews = computed(() => getters.getVisitedViews);

  /**
   * 初始化视图
   * @returns {Promise<void>}
   */
  async function initViews() {
    const affixViews = filterAffixViews(getRoutes());
    for (const view of affixViews) {
      view.name && await dispatch('tagView/addVisitedView', view);
    }
  }

  /**
   * 跳转视图
   * @param view
   * @returns {Promise<void>}
   */
  async function goView(view) {
    const {path, fullPath} = view;
    if (path === unref(currentRoute).path) return;
    await push({path: fullPath})
  }

  /**
   * 添加视图
   * @returns {Promise<void>}
   */
  async function addView() {
    unref(currentRoute).name && await dispatch('tagView/addView', unref(currentRoute));
  }

  /**
   * 关闭视图
   * @param view
   * @returns {Promise<void>}
   */
  async function closeView(view) {
    const {visitedViews} = await dispatch('tagView/delView', view);
    if (viewIsActive(view)) {
      await toLastView(visitedViews, view);
    }
  }

  /**
   * 刷新视图
   * @param view
   * @returns {Promise<void>}
   */
  async function refreshView(view) {
    await dispatch('tagView/delCachedView', view);
    const {fullPath} = view;
    await nextTick(() => {
      replace({path: '/redirect' + fullPath});
    })
  }

  /**
   * 关闭其他视图
   * @param view
   * @returns {Promise<void>}
   */
  async function closeOtherView(view) {
    if (view.fullPath !== unref(currentRoute).fullPath) {
      await push(view);
    }
    await dispatch('tagView/delOtherViews', view);
    await moveToCurrentTagView();
  }

  /**
   * 关闭所有视图
   * @param view
   * @returns {Promise<void>}
   */
  async function closeAllView(view) {
    const {visitedViews} = await dispatch('tagView/delAllViews');
    await toLastView(visitedViews, view);
  }

  /**
   * 过滤需要固定的视图
   * @param routes
   * @param basePath
   * @returns {[]}
   */
  function filterAffixViews(routes, basePath = '/') {
    let views = [];
    routes.forEach(route => {
      if (route.meta && route.meta.affix) {
        const viewPath = path.resolve(basePath, route.path)
        views.push({fullPath: viewPath, path: viewPath, name: route.name, meta: {...route.meta}})
      }
      if (route.children) {
        const childViews = filterAffixViews(route.children, route.path)
        if (childViews.length >= 1) {
          views = [...views, ...childViews]
        }
      }
    });
    return views
  }

  /**
   * 移动到当前路由所在标签
   * @returns {Promise<void>}
   */
  async function moveToCurrentTagView() {
    const tags = getViewRefs;
    await nextTick(async () => {
      for (const tag of tags.value) {
        if (tag.$attrs.route.path === unref(currentRoute).path) {
          // this.$refs.scrollPane.moveToTarget(tag);
          if (tag.$attrs.route.fullPath !== unref(currentRoute).fullPath) {
            await dispatch('tagView/updateVisitedView', unref(currentRoute))
          }
          break
        }
      }
    })
  }

  /**
   * 跳转到最后一个标签视图
   * @param visitedViews
   * @param view
   * @returns {Promise<void>}
   */
  async function toLastView(visitedViews, view) {
    const latestView = visitedViews.slice(-1)[0];
    if (latestView) {
      await push({path: '/redirect' + latestView.fullPath})
    } else {
      if (view.name === 'Dashboard') {
        await replace({path: '/redirect' + view.fullPath})
      } else {
        await push('/')
      }
    }
  }

  /**
   * 是否活跃视图
   * @param view
   * @returns {boolean}
   */
  function viewIsActive(view) {
    return view.path === unref(currentRoute).path;
  }

  /**
   * 是否固定视图
   * @param view
   * @returns {boolean|*}
   */
  function viewIsAffix(view) {
    return view.meta && view.meta.affix;
  }

  return {
    getViewRefs,
    getSelectView,
    getVisitedViews,
    initViews,
    goView,
    addView,
    closeView,
    refreshView,
    closeOtherView,
    closeAllView,
    viewIsActive,
    viewIsAffix,
  };
}