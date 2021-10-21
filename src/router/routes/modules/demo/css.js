import Layout from "@/layouts";

export default [
  {
    path: '/css',
    component: Layout,
    redirect: '/css/text',
    meta: {title: '样式', icon: 'fa fa-css3', menu: true},
    children: [
      {
        path: 'text',
        name: 'text',
        meta: {title: '文本', menu: true, affix: false},
        component: () => import('@/views/demo/css/text'),
      },
      {
        path: 'flex',
        name: 'flex',
        meta: {title: '布局', menu: true, affix: false},
        component: () => import('@/views/demo/css/flex'),
      },
      {
        path: 'margin',
        name: 'margin',
        meta: {title: '边距', menu: true, affix: false},
        component: () => import('@/views/demo/css/margin'),
      },
    ]
  }
];