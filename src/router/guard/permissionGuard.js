import store from "@/store";

// 白名单
const whiteList = [
  '/login',
  '/404'
];

export function createPermissionGuard(router) {
  const {dispatch, getters} = store;
  router.beforeEach(async (to, from, next) => {
    if (whiteList.indexOf(to.path) !== -1) { // 白名单，直接进入
      next();
    } else if (getters.getAccessToken) { // 已登录 拉取用户信息,过滤权限路由,动态注册路由
      if (!getters.getUser) await dispatch('user/getUserInfo');
      if (!router.hasRoute('dashboard')) {
        const accessRoutes = await dispatch('permission/getPermissions');
        accessRoutes.forEach(item => router.addRoute(item))
        next({...to, replace: true});
      } else {
        next();
      }
    } else { // 否则全部重定向到登录页
      next(`/login?redirect=${to.path}`);
    }
    return true;
  });
}