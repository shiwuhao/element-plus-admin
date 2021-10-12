import {responsePageSuccess, responseSuccess} from "../_utils.js";

const permissions1 = {
  "menus": [{
    "id": 1,
    "pid": 0,
    "title": "Dashboard",
    "icon": "fa fa-home",
    "url": "/dashboard",
    "type": "menu",
    "unique": "get,/dashboard"
  }, {
    "id": 9,
    "pid": 5,
    "title": "\u914d\u7f6e\u7ba1\u7406",
    "icon": "el-icon-setting",
    "url": "/system/configs",
    "type": "menu",
    "unique": "get,/system/configs"
  }, {
    "id": 8,
    "pid": 5,
    "title": "\u6743\u9650\u7ba1\u7406",
    "icon": "fa fa-linode",
    "url": "/system/menus",
    "type": "menu",
    "unique": "get,/system/menus"
  }, {
    "id": 7,
    "pid": 5,
    "title": "\u89d2\u8272\u7ba1\u7406",
    "icon": "fa fa-sitemap",
    "url": "/system/roles",
    "type": "menu",
    "unique": "get,/system/roles"
  }, {
    "id": 6,
    "pid": 5,
    "title": "\u7528\u6237\u7ba1\u7406",
    "icon": "el-icon-user-solid",
    "url": "/system/users",
    "type": "menu",
    "unique": "get,/system/users"
  }, {
    "id": 5,
    "pid": 0,
    "title": "\u7cfb\u7edf\u7ba1\u7406",
    "icon": "el-icon-menu",
    "url": "/system",
    "type": "menu",
    "unique": "get,/system"
  }, {
    "id": 4,
    "pid": 1,
    "title": "\u5206\u6790\u9875",
    "icon": "el-icon-data-analysis",
    "url": "/dashboard/analysis",
    "type": "menu",
    "unique": "get,/dashboard/analysis"
  }, {
    "id": 3,
    "pid": 1,
    "title": "\u76d1\u63a7\u9875",
    "icon": "el-icon-monitor",
    "url": "/dashboard/monitor",
    "type": "menu",
    "unique": "get,/dashboard/monitor"
  }, {
    "id": 2,
    "pid": 1,
    "title": "\u5de5\u4f5c\u53f0",
    "icon": "fa fa-dashboard",
    "url": "/dashboard/workplace",
    "type": "menu",
    "unique": "get,/dashboard/workplace"
  }],
  "roles": ["Administrator"],
  "actions": ["Role:update", "User:index", "User:store", "User:show", "User:update", "User:destroy", "Role:index", "Role:store", "Role:show", "Config:destroy", "Role:destroy", "Permission:index", "Permission:store", "Permission:autoGenerate", "Permission:show", "Permission:update", "Permission:destroy", "Config:update", "Config:show", "Config:groupUpdate", "Config:group", "Config:store", "Config:index", "Config:configItems"]
};
const permissions2 = {
  "menus": [
    {
      "id": 1,
      "pid": 0,
      "title": "Dashboard",
      "icon": "fa fa-home",
      "url": "/dashboard",
      "type": "menu",
      "unique": "get,/dashboard"
    },
    {
      "id": 4,
      "pid": 1,
      "title": "分析页",
      "icon": "el-icon-data-analysis",
      "url": "/dashboard/analysis",
      "type": "menu",
      "unique": "get,/dashboard/analysis"
    },
    {
      "id": 3,
      "pid": 1,
      "title": "监控页",
      "icon": "el-icon-monitor",
      "url": "/dashboard/monitor",
      "type": "menu",
      "unique": "get,/dashboard/monitor"
    },
    {
      "id": 2,
      "pid": 1,
      "title": "工作台",
      "icon": "fa fa-dashboard",
      "url": "/dashboard/workplace",
      "type": "menu",
      "unique": "get,/dashboard/workplace"
    }
  ],
  "roles": ["Test"],
  "actions": ["User:index", "User:store"]
};

const userInfo1 = {
  "id": 1,
  "username": "shiwuhao",
  "nickname": "shiwuhao",
  "avatar": "https://v3.cn.vuejs.org/logo.png",
  "gender": 0,
  "status": 1,
  "source": "1",
  "created_at": "2021-09-24 07:32:54",
  "status_label": "正常"
}

const userInfo2 = {
  "id": 2,
  "username": "test",
  "nickname": "test",
  "avatar": "https://v3.cn.vuejs.org/logo.png",
  "gender": 0,
  "status": 1,
  "source": "1",
  "created_at": "2021-09-24 07:32:54",
  "status_label": "正常"
}

export default [
  {
    url: '/backend/personal/info',
    method: 'get',
    response: ({headers: {authorization}}) => {
      const userInfo = authorization === 'Bearer mockToken1' ? userInfo1 : userInfo2;
      return responseSuccess(userInfo)
    }
  },
  {
    url: '/backend/personal/permissions',
    method: 'get',
    response: ({headers: {authorization}}) => {
      const permissions = authorization === 'Bearer mockToken1' ? permissions1 : permissions2;
      return responseSuccess(permissions)
    }
  }
];