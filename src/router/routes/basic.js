import Layout from "@/layouts/index.vue";

export default [
  {
    path: '/',
    name: 'Root',
    redirect: 'dashboard',
    meta: {title: 'Root', menu: false,},
  },
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
    name: 'login',
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
    component: () => import('@/views/demo/page/error-page/404'),
  },
  {
    path: '/401',
    meta: {title: '401', menu: false, cache: false},
    component: () => import('@/views/demo/page/error-page/401'),
  },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   meta: {title: '个人中心', menu: false, cache: false},
  //   redirect: '/profile/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: {title: 'Profile', icon: 'user', cache: false}
  //     }
  //   ]
  // },
]
;