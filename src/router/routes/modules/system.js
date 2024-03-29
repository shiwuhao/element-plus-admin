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
        component: () => import('@/views/system/users/index.vue'),
      },
      {
        path: 'roles',
        name: 'roles',
        meta: {title: '角色管理', menu: true, affix: false},
        component: () => import('@/views/system/roles/index.vue'),
      },
      {
        path: 'menus',
        name: 'menus',
        meta: {title: '菜单管理', menu: true, affix: false},
        component: () => import('@/views/system/menus/index.vue'),
      },
      {
        path: 'actions',
        name: 'actions',
        meta: {title: '动作管理', menu: true, affix: false},
        component: () => import('@/views/system/actions/index.vue'),
      },
      {
        path: 'permissions',
        name: 'permissions',
        meta: {title: '权限节点', menu: true, affix: false},
        component: () => import('@/views/system/permissions/index.vue'),
      },
      {
        path: 'configs',
        name: 'config',
        meta: {title: '站点配置', menu: true, affix: false},
        component: () => import('@/views/system/configs/index.vue'),
      }
    ]
  },
];