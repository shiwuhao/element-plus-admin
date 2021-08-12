import Layout from "@/layouts/index.vue";
import LayoutContent from "@/layouts/content/Content"
export default [
  {
    path: '/page',
    name: 'page',
    redirect: '/page/account/setting',
    component: Layout,
    meta: {title: '页面', icon: 'el-icon-document', menu: true},
    children: [
      {
        path: 'account',
        name: 'AccountPage',
        redirect: '/page/account/setting',
        component: LayoutContent,
        meta: {title: '个人页',menu: true, affix: false},
        children: [
          {
            path: 'center',
            name: 'AccountCenterPage',
            component: () => import('@/views/page/account/center/index.vue'),
            meta: {title: '个人中心',menu: true, affix: false}
          },
          {
            path: 'setting',
            name: 'AccountSettingPage',
            component: () => import('@/views/page/account/setting/index.vue'),
            meta: {title: '个人设置',menu: true, affix: false}
          }
        ]
      }
    ]
  },
];