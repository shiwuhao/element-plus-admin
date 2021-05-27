import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'
import constantRoutes from "@/router/modules/constantRoutes";
import asyncRoutes from '@/router/modules/asyncRoutes.js';

const routes = [
  ...constantRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 白名单路由 没有权限请求
const whiteList = [
  '/login',
  '/404'
];

// 路由拦截器
router.beforeEach(async (to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) { // 白名单，直接进入
    next();
  } else if (store.getters.getAccessToken) { // 已登录 拉取用户信息,过滤权限路由,动态注册路由
    if (!store.getters.getUser) await store.dispatch('user/getUserInfo');
    if (!router.hasRoute('dashboard')) {
      const accessRoutes = await store.dispatch('permission/generateRoutes', store.getters.getRoles);
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

export {
  constantRoutes,
  asyncRoutes
}

export function setupRouter(app) {
  app.use(router);
}

export default router;