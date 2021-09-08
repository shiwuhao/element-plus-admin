import Layout from "@/layouts/index.vue";

export default [
  {
    path: '/test',
    component: Layout,
    redirect: '/test/icon',
    meta: {title: '测试', icon: 'el-icon-setting', menu: true},
    children: [
      {
        path: 'icon',
        name: 'icon',
        meta: {title: 'icon选择', menu: true, affix: false},
        component: () => import('@/views/test/icon/index'),
      }
    ]
  },
];