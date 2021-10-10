import Layout from "@/layouts/index";
import LayoutContent from "@/layouts/content/Content"

export default [
  {
    path: '/page',
    component: Layout,
    redirect: '/error-page',
    meta: {title: '页面', icon: 'el-icon-tickets', menu: true},
    children: [
      {
        path: 'error-page',
        name: 'error-page',
        meta: {title: '错误页', menu: true, affix: false},
        component: () => import('@/views/demo/page/error-page/401.vue'),
      },
    ]
  }
];