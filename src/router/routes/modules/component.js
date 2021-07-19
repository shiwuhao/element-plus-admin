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
        meta: {title: '表单', menu: true, affix: false, icon: 'el-icon-edit'},
        component: LayoutContent,
        children: [
          {
            path: 'basicForm',
            name: 'basicForm',
            meta: {title: '基础表单', menu: true, affix: false},
            component: () => import('@/views/component/form/BasicForm'),
          },
          {
            path: 'advancedForm',
            name: 'advancedForm',
            meta: {title: '收缩表单', menu: true, affix: false},
            component: () => import('@/views/component/form/AdvancedForm'),
          },
          {
            path: 'dynamicForm',
            name: 'dynamicForm',
            meta: {title: '动态表单', menu: true, affix: false},
            component: () => import('@/views/component/form/DynamicForm'),
          },
          {
            path: 'ruleForm',
            name: 'ruleForm',
            meta: {title: '表单验证', menu: true, affix: false},
            component: () => import('@/views/component/form/RuleForm'),
          },
          {
            path: 'customForm',
            name: 'customForm',
            meta: {title: '自定义组件', menu: true, affix: false},
            component: () => import('@/views/component/form/CustomForm'),
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
      {
        path: 'editor',
        name: 'editor',
        redirect: '/component/editor/code',
        meta: {title: '编辑器', menu: true, affix: false, icon: 'el-icon-edit-outline'},
        component: LayoutContent,
        children: [
          {
            path: 'code',
            name: 'code',
            meta: {title: '代码编辑器', menu: true, affix: false},
            component: () => import('@/views/component/editor/codeEditor'),
          },
          {
            path: 'markdown',
            name: 'markdown',
            meta: {title: 'markdown编辑器', menu: true, affix: false},
            component: () => import('@/views/component/editor/markdownEditor'),
          },
          {
            path: 'rich',
            name: 'rich',
            meta: {title: '富文本编辑器', menu: true, affix: false},
            component: () => import('@/views/component/editor/codeEditor'),
          },
        ],
      },
    ]
  }
];