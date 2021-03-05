const tagView = {
  namespaced: true,
  state: {
    visitedViews: [],
    cachedViews: [],
  },
  mutations: {
    // 添加已访问视图
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some(item => item.path === view.path)) return;
      state.visitedViews.push({title: view.meta.title || 'no-name', ...view});
    },
    // 删除已访问视图
    DEL_VISITED_VIEW: (state, view) => {
      const index = state.visitedViews.findIndex(item => item.path === view.path);
      index > -1 && state.visitedViews.splice(index, 1);
    },
    // 删除其他已访问视图
    DEL_OTHER_VISITED_VIEWS: (state, view) => {
      state.visitedViews = state.visitedViews.filter(item => item.meta.affix || item.path === view.path);
    },
    // 删除所有已访问视图
    DEL_ALL_VISITED_VIEWS: (state) => {
      state.visitedViews = state.visitedViews.filter(item => item.meta.affix);
    },
    // 更新已访问视图
    UPDATE_VISITED_VIEWS: (state, view) => {
      const index = state.visitedViews.findIndex(item => item.path === view.path);
      index > -1 && (state.visitedViews[index] = view);
    },
    // 添加缓存视图
    ADD_CACHED_VIEW: (state, view) => {
      if (view.name && !state.cachedViews.includes(view.name) && view.meta.cache !== false) {
        state.cachedViews.push(view.name);
      }
    },
    // 删除缓存视图
    DEL_CACHED_VIEW: (state, view) => {
      if (!view.name) return;
      const index = state.cachedViews.findIndex(item => item === view.name);
      index > -1 && state.cachedViews.splice(index, 1);
    },
    // 删除其他缓存视图
    DEL_OTHER_CACHED_VIEWS: (state, view) => {
      if (!view.name) return;
      state.cachedViews = state.cachedViews.filter(item => item === view.name);
    },
    // 删除其他缓存视图
    DEL_ALL_CACHED_VIEWS: (state) => {
      state.cachedViews = [];
    }
  },
  actions: {
    // 添加已访问视图
    addVisitedView({commit}, view) {
      commit('ADD_VISITED_VIEW', view);
    },
    // 删除已访问视图
    delVisitedView({commit, state}, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEW', view);
        resolve([...state.cachedViews]);
      })
    },
    // 删除其他访问视图
    delOtherVisitedViews({commit, state}, view) {
      return new Promise(resolve => {
        commit('DEL_OTHER_VISITED_VIEWS', view);
        resolve([...state.visitedViews]);
      })
    },
    // 删除所有访问视图
    delAllVisitedViews({commit, state}) {
      return new Promise(resolve => {
        commit('DEL_ALL_VISITED_VIEWS');
        resolve([...state.visitedViews]);
      })
    },
    // 更新访问视图
    updateVisitedView({commit}, view) {
      commit('UPDATE_VISITED_VIEWS', view);
    },
    // 添加缓存视图
    addCachedView({commit}, view) {
      commit('ADD_CACHED_VIEW', view);
    },
    // 删除缓存视图
    delCachedView({commit, state}, view) {
      return new Promise(resolve => {
        commit('DEL_CACHED_VIEW', view);
        resolve([...state.cachedViews]);
      });
    },
    // 删除其他缓存视图
    delOtherCachedViews({commit, state}, view) {
      return new Promise(resolve => {
        commit('DEL_OTHER_CACHED_VIEWS', view);
        resolve([...state.cachedViews]);
      });
    },
    // 删除所有缓存视图
    delAllCachedViews({commit, state}) {
      return new Promise(resolve => {
        commit('DEL_ALL_CACHED_VIEWS');
        resolve([...state.cachedViews]);
      });
    },
    // 添加视图
    addView({dispatch}, view) {
      dispatch('addVisitedView', view);
      dispatch('addCachedView', view);
    },
    // 删除视图
    delView({dispatch, state}, view) {
      return new Promise(resolve => {
        dispatch('delVisitedView', view);
        dispatch('delCachedView', view);
        resolve({...state});
      });
    },
    // 删除其他视图
    delOtherViews({dispatch, state}, view) {
      return new Promise(resolve => {
        dispatch('delOtherVisitedViews', view);
        dispatch('delOtherCachedViews', view);
        resolve({...state});
      });
    },
    // 删除所有视图
    delAllViews({dispatch, state}) {
      return new Promise(resolve => {
        dispatch('delAllVisitedViews');
        dispatch('delAllCachedViews');
        resolve({...state});
      });
    }
  }
};
export default tagView;
