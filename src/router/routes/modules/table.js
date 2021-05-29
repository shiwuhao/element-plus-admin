import Layout from "@/layouts/index";

export default [
  {
    path: '/table',
    component: Layout,
    redirect: '/table/base-table',
    meta: {title: '列表页', icon: 'el-icon-delete', menu: true},
    children: [
      {
        path: 'base-table',
        name: 'base-table',
        meta: {title: '基础表格', menu: true, affix: false},
        component: () => import('@/views/table/base-table'),
      },
      {
        path: 'dynamic-table',
        name: 'dynamic-table',
        meta: {title: '动态表格', menu: true, affix: false},
        component: () => import('@/views/table/dynamic-table'),
      },
      {
        path: 'search-form',
        name: 'search-form',
        meta: {title: '搜索表单', menu: true, affix: false},
        component: () => import('@/views/table/search-form'),
      },
      {
        path: 'complex-table',
        name: 'complex-table',
        meta: {title: '综合表格', menu: true, affix: false},
        component: () => import('@/views/table/complex-table'),
      },
    ]
  }
];