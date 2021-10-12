import Layout from "@/layouts/index.vue";
import LayoutContent from "@/layouts/content/Content.vue"

export default [
  {
    path: '/page',
    component: Layout,
    redirect: '/error-page',
    meta: {title: '页面', icon: 'el-icon-tickets', menu: true},
    children: [
      {
        path: 'center',
        name: 'AccountCenterPage',
        component: () => import('@/views/demo/page/account/center/index.vue'),
        meta: {title: '个人中心',menu: true, affix: false}
      },
      {
        path: 'setting',
        name: 'AccountSettingPage',
        component: () => import('@/views/demo/page/account/setting/index.vue'),
        meta: {title: '个人设置',menu: true, affix: false}
      },
      {
        path: 'error-page',
        name: 'error-page',
        meta: {title: '错误页', menu: true, affix: false},
        component: () => import('@/views/demo/page/error-page/401.vue'),
      }
    ]
  }
];