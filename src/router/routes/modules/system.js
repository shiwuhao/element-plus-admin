import Layout from "@/layouts/index.vue";

export default [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/configs',
    meta: {title: '系统', icon: 'el-windows', menu: true},
    children: [
      {
        path: 'users',
        name: 'users',
        meta: {title: '用户管理', menu: true, affix: false},
        component: () => import('@/views/system/users/index'),
      },
      {
        path: 'roles',
        name: 'roles',
        meta: {title: '角色管理', menu: true, affix: false},
        component: () => import('@/views/system/roles/index'),
      },
      {
        path: 'menus',
        name: 'menus',
        meta: {title: '菜单管理', menu: true, affix: false},
        component: () => import('@/views/system/permissions/index'),
      },
      {
        path: 'configs',
        name: 'config',
        meta: {title: '站点配置', menu: true, affix: false},
        component: () => import('@/views/system/configs/index'),
      }
    ]
  },
];