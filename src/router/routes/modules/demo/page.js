import Layout from "@/layouts/index.vue";
import LayoutContent from "@/layouts/content/Content.vue"

export default [
  {
    path: '/page',
    component: Layout,
    redirect: '/error-page',
    meta: {title: '页面', icon: 'el-compass', menu: true},
    children: [
      {
        path: 'personal',
        name: 'personal',
        component: LayoutContent,
        meta: {title: '个人页', menu: true, affix: false},
        children: [
          {
            path: 'center',
            name: 'personal-center',
            component: () => import('@/views/demo/page/personal/center/index.vue'),
            meta: {title: '个人中心', menu: true, affix: false}
          },
          {
            path: 'setting',
            name: 'personal-setting',
            component: () => import('@/views/demo/page/personal/setting/index.vue'),
            meta: {title: '个人设置', menu: true, affix: false}
          },
        ]
      },
      {
        path: 'form',
        name: 'form',
        component: LayoutContent,
        meta: {title: '表单页', menu: true, affix: false},
        children: [
          {
            path: 'basic',
            meta: {title: '基础表单', menu: true, affix: false},
            component: () => import('@/views/demo/page/form/basic/index.vue'),
          },
          {
            path: 'step',
            meta: {title: '分步表单', menu: true, affix: false},
            component: () => import('@/views/demo/page/form/step/index.vue'),
          },
        ]
      },
      {
        path: 'list',
        name: 'list-page',
        component: LayoutContent,
        meta: {title: '列表页', menu: true, affix: false},
        children: [
          {
            path: 'basic',
            meta: {title: '基础表单', menu: true, affix: false},
            component: () => import('@/views/demo/page/form/basic/index.vue'),
          },
          {
            path: 'step',
            meta: {title: '分步表单', menu: true, affix: false},
            component: () => import('@/views/demo/page/form/step/index.vue'),
          },
        ]
      },
      {
        path: 'error',
        name: 'error',
        component: LayoutContent,
        meta: {title: '错误页', menu: true, affix: false},
        children: [
          {
            path: '403',
            name: '403',
            meta: {title: '403', menu: true, affix: false},
            component: () => import('@/views/demo/page/error/403.vue'),
          },
          {
            path: '404',
            name: '404',
            meta: {title: '404', menu: true, affix: false},
            component: () => import('@/views/demo/page/error/404.vue'),
          },
        ]
      },
    ]
  }
];