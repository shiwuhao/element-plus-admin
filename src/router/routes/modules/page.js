import Layout from "@/layouts/index";
import LayoutContent from "@/layouts/content/Content"

export default [
  {
    path: '/page',
    component: Layout,
    redirect: '/feature',
    meta: {title: '功能', icon: 'el-icon-set-up', menu: true},
    children: [
      {
        path: 'context-menu',
        name: 'context-menu',
        meta: {title: '右键菜单', menu: true, affix: false},
        component: () => import('@/views/demo/feature/context-menu/index.vue'),
      },
    ]
  }
];