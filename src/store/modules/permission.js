import {basicRoutes, asyncRoutes} from '@/router/routes';
import {permissions} from "@/api/personal";
import {listToTree} from "@/utils/utils";

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param menus
 * @param route
 * @returns {boolean|*}
 */
function hasPermission(menus, route) {
  // return true;
  let res = menus.some(menu => menu.url === route.path)
  console.log(res);
  return !!res;
  if (route.meta && route.meta.roles) {
    return menus.some(menu => route.path === menu.url)
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes
 * @param menus
 * @returns {[]}
 */
function filterAsyncRoutes(routes, menus) {
  const res = [];
  const defaultRouteMeta = {meta: {menu: true, cache: true, affix: false}};
  routes.forEach(route => {
    let tmp = {...defaultRouteMeta, ...route};
    if (hasPermission(menus, tmp)) {
      if (tmp.children) {
        console.log(222);
        tmp.children = filterAsyncRoutes(tmp.children, menus);
      }
      res.push(tmp);
    }
  });
  return res
}

/**
 * 过滤菜单
 * @param routes
 * @param parentPath
 * @returns {[]}
 */
function filterMenus(routes, parentPath = '') {
  const res = [];
  routes.forEach(({path, meta: {icon, title, menu}, children}) => {
    let fullPath = parentPath + '/' + path.replace('/', '');
    let tmp = {path: fullPath, icon: icon, title: title};
    if (menu) {
      if (children) {
        tmp.children = filterMenus(children, fullPath);
      }
      res.push(tmp);
    }
  });
  return res;
}

const permission = {
  namespaced: true,
  state: {
    menus: [],// 菜单
    roles: [],// 角色
    actions: [],// 动作
    isLoaded: false,
  },
  mutations: {
    SET_PERMISSIONS(state, {roles, menus, actions}) {
      state.menus = menus;
      state.roles = roles;
      state.actions = actions;
      state.isLoaded = true;
    },
  },
  actions: {
    getPermissions: async ({commit}) => {
      const {data: {data: {roles = [], menus = [], actions = []}}} = await permissions();
      const _menus = listToTree(menus.map(item => ({path: item.url, ...item})));
      commit('SET_PERMISSIONS', {roles, menus: _menus, actions});
      return Promise.resolve(asyncRoutes);
    },

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
