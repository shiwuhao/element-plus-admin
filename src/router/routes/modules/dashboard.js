import Layout from "@/layouts";

export default [
  {
    path: '/dashboard',
    component: Layout,
    name: 'dashboard',
    redirect: '/dashboard/workplace',
    meta: {title: '看板', icon: 'el-icon-s-home', menu: true, cache: true},
    children: [
      {
        path: 'workplace',
        name: 'workplace',
        meta: {title: '工作台', menu: true, cache: true, affix: true},
        component: () => import('@/views/dashboard/workplace'),
      },
      {
        path: 'analysis',
        name: 'analysis',
        meta: {title: '分析页', menu: true, cache: true, affix: true},
        component: () => import('@/views/dashboard/analysis'),
      },
      {
        path: 'monitor',
        name: 'monitor',
        meta: {title: '监控页', menu: true, cache: true, affix: false},
        component: () => import('@/views/dashboard/monitor'),
      },
    ]
  },
];