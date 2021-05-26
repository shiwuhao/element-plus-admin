import {constantRoutes, asyncRoutes} from '@/router';
import {unref} from "vue";

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 * @returns {boolean|*}
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes
 * @param roles
 * @returns {[]}
 */
function filterAsyncRoutes(routes, roles) {
  const res = [];
  const defaultRouteMeta = {meta: {menu: true, cache: true, affix: false}};
  routes.forEach(route => {
    let tmp = {...defaultRouteMeta, ...route};
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });
  return res
}

const permission = {
  namespaced: true,
  state: {
    menus: [],
    routes: [],
    addRoutes: [],
  },
  mutations: {
    SET_ROUTES(state, routes) {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
      state.menus = state.routes.filter(item => item.meta && item.meta.menu !== false);
    },
  },
  actions: {
    // 生成访问路由
    generateRoutes({commit}, roles) {
      return new Promise(resolve => {
        let accessedRoutes;
        if (roles.some(item => item === 'Administrator')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        }

        commit('SET_ROUTES', accessedRoutes);
        resolve(accessedRoutes);
      });
    },
  }
};
export default permission;
