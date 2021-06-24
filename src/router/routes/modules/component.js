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
        path: 'form',
        name: 'form',
        redirect: '/component/form/basic',
        meta: {title: '表单', menu: true, affix: false},
        component: LayoutContent,
        children: [
          {
            path: 'basic',
            name: 'basicForm',
            meta: {title: '基础表单', menu: true, affix: false},
            component: () => import('@/views/component/form/Basic'),
          },
          {
            path: 'advancedForm',
            name: 'advancedForm',
            meta: {title: '收缩表单', menu: true, affix: false},
            component: () => import('@/views/component/form/AdvancedForm'),
          },
          {
            path: 'dynamic',
            name: 'dynamicForm',
            meta: {title: '动态表单', menu: true, affix: false},
            component: () => import('@/views/component/form/Basic'),
          },
        ],
      },
      {
        path: 'table',
        name: 'table',
        redirect: '/component/table/basic',
        meta: {title: '表格', menu: true, affix: false, icon: 'el-icon-table-lamp'},
        component: LayoutContent,
        children: [
          {
            path: 'basic',
            name: 'basic',
            meta: {title: '基础表格', menu: true, affix: false},
            component: () => import('@/views/component/table/Basic'),
          },
          {
            path: 'treeTable',
            name: 'treeTable',
            meta: {title: '树形表格', menu: true, affix: false},
            component: () => import('@/views/component/table/TreeTable'),
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