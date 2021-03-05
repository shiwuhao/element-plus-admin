import Layout from "@/components/Layout";

export default [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/configs',
    meta: {title: '系统配置', icon: 'el-icon-setting'},
    children: [
      {
        path: '/system/users',
        name: 'users',
        meta: {title: '用户管理', affix: false},
        component: () => import('@/views/system/users/list'),
      },
      {
        path: '/system/configs',
        name: 'config',
        meta: {title: '站点配置', affix: false},
        component: () => import('@/views/system/configs/list'),
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/base-table',
    meta: {title: '列表页', icon: 'el-icon-delete'},
    children: [
      {
        path: '/table/base-table',
        name: 'base-table',
        meta: {title: '基础表格', affix: false},
        component: () => import('@/views/table/base-table'),
      },
      {
        path: '/table/dynamic-table',
        name: 'dynamic-table',
        meta: {title: '动态表格', affix: false},
        component: () => import('@/views/table/dynamic-table'),
      },
      {
        path: '/table/search-form',
        name: 'search-form',
        meta: {title: '搜索表单', affix: false},
        component: () => import('@/views/table/search-form'),
      },
      {
        path: '/table/complex-table',
        name: 'complex-table',
        meta: {title: '综合表格', affix: false},
        component: () => import('@/views/table/complex-table'),
      },
    ]
  }
];