import Layout from "@/layouts";

export default [
  {
    path: '/feature',
    component: Layout,
    redirect: '/feature',
    meta: {title: '功能', icon: 'el-icon-set-up', menu: true},
    children: [
      {
        path: 'context-menu',
        name: 'context-menu',
        meta: {title: '右键菜单', menu: true, affix: false},
        component: () => import('@/views/demo/feature/context-menu'),
      },
      {
        path: 'full-screen',
        name: 'full-screen',
        meta: {title: '全屏', menu: true, affix: false},
        component: () => import('@/views/demo/feature/full-screen'),
      },
      {
        path: 'clipboard',
        name: 'clipboard',
        meta: {title: '剪贴板', menu: true, affix: false},
        component: () => import('@/views/demo/feature/clipboard'),
      },
      {
        path: 'click-out-side',
        name: 'click-out-side',
        meta: {title: '单击外部', menu: true, affix: false},
        component: () => import('@/views/demo/feature/click-out-side'),
      },
      {
        path: 'qr-code',
        name: 'qr-code',
        meta: {title: '二维码', menu: true, affix: false},
        component: () => import('@/views/demo/feature/qr-code'),
      },
      {
        path: 'drauu',
        name: 'drauu',
        meta: {title: '画图', menu: true, affix: false},
        component: () => import('@/views/demo/feature/drauu'),
      },
      {
        path: 'debounce',
        name: 'debounce',
        meta: {title: '防抖', menu: true, affix: false},
        component: () => import('@/views/demo/feature/debounce'),
      },
      {
        path: 'throttle',
        name: 'throttle',
        meta: {title: '节流', menu: true, affix: false},
        component: () => import('@/views/demo/feature/throttle'),
      },
    ]
  }
];