import Layout from "@/layouts/index";
import LayoutContent from "@/layouts/content/Content"

export default [
  {
    path: '/feature',
    component: Layout,
    redirect: '/feature',
    meta: {title: '功能', icon: 'el-icon-set-up', menu: true},
    children: [
      {
        path: 'full-screen',
        name: 'full-screen',
        meta: {title: '全屏', menu: true, affix: false},
        component: () => import('@/views/feature/full-screen/index.vue'),
      }
    ]
  }
];