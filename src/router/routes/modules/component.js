import Layout from "@/layouts/index";
import LayoutContent from "@/layouts/content/Content"

export default [
  {
    path: '/component',
    component: Layout,
    redirect: '/component/table/basic',
    meta: {title: '组件', icon: 'el-icon-c-scale-to-original', menu: true},
    children: [
      {
        path: 'table',
        name: 'table',
        meta: {title: '表格', menu: true, affix: false, icon: 'el-icon-table-lamp'},
        component: LayoutContent,
        children: [
          {
            path: 'basic',
            name: 'basic',
            meta: {title: '基础表格', menu: true, affix: false},
            component: () => import('@/views/component/table/basic'),
          },
          {
            path: 'dynamic-table',
            name: 'dynamic-table',
            meta: {title: '动态表格', menu: true, affix: false},
            component: () => import('@/views/component/table/dynamic-table'),
          },
          {
            path: 'search-form',
            name: 'search-form',
            meta: {title: '搜索表单', menu: true, affix: false},
            component: () => import('@/views/component/table/search-form'),
          },
          {
            path: 'complex-table',
            name: 'complex-table',
            meta: {title: '综合表格', menu: true, affix: false},
            component: () => import('@/views/component/table/complex-table'),
          },
        ],
      },
    ]
  }
];