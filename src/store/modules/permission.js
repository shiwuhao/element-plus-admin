import {asyncRoutes, demoRoutes} from '@/router/routes';
import {permissions} from "@/api/personal";
import {listToTree} from "@/utils/utils";

/**
 * 判断是否有路由权限
 * @param route
 * @param permission
 * @returns {boolean}
 */
function hasPermission(route, permission) {
  return true;
}

/**
 * 通过权限节点过滤路由
 * @param routes
 * @param permission
 * @returns {[]}
 */
function filterAsyncRoutes(routes, permission) {
  const res = [];
  const defaultRouteMeta = {meta: {menu: true, cache: true, affix: false}};
  routes.forEach(route => {
    let _route = {...defaultRouteMeta, ...route};
    if (hasPermission(_route, permission)) {
      if (_route.children) {
        _route.children = filterAsyncRoutes(_route.children, permission);
      }
      res.push(_route);
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
    isLoaded: false, // 是否已加载，该字段禁止缓存
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
      const {data: {data: permission}} = await permissions();
      const {roles = [], menus = [], actions = []} = permission;
      const backendMenu = listToTree(menus.map(item => ({path: item.url, ...item})));// 后端菜单
      const frontedMenu = filterMenus(demoRoutes);// 前端菜单,demo展示使用
      commit('SET_PERMISSIONS', {roles, menus: [...backendMenu, ...frontedMenu], actions});
      // 按需是否过滤权限路由 @TODO
      const permissionRoutes = filterAsyncRoutes(asyncRoutes, permission);
      return Promise.resolve(permissionRoutes);
    },
  }
};
export default permission;
