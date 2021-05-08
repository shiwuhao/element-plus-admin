import Layout from "@/layouts/index.vue";

export default [
  {
    path: '/redirect',
    component: Layout,
    meta: {title: 'redirect', menu: false, cache: false},
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    meta: {title: 'login', menu: false, cache: false},
    component: () => import('@/views/login/index'),
  },
  {
    path: '/auth-redirect',
    meta: {title: 'auth-redirect', menu: false, cache: false},
    component: () => import('@/views/login/auth-redirect'),
  },
  {
    path: '/404',
    meta: {title: '404', menu: false, cache: false},
    component: () => import('@/views/error-page/404'),
  },
  {
    path: '/401',
    meta: {title: '401', menu: false, cache: false},
    component: () => import('@/views/error-page/401'),
  },
  {
    path: '/profile',
    component: Layout,
    meta: {title: '个人中心', menu: false, cache: false},
    redirect: '/profile/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: {title: 'Profile', icon: 'user', cache: false}
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {icon: 'el-icon-user-solid', menu: true, cache: true},
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {title: '首页', icon: 'el-icon-s-home', menu: true, cache: true, affix: true},
        component: () => import('@/views/dashboard/index'),
      },
    ]
  },
];