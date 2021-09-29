import {responsePageSuccess, responseSuccess} from "../_utils";

const lists = [{
  "id": 1,
  "pid": 0,
  "type": "menu",
  "name": "Dashboard",
  "title": "Dashboard",
  "icon": "fa fa-home",
  "method": "get",
  "url": "\/dashboard",
  "sort": 0,
  "created_at": "2021-09-24 07:32:54",
  "children_count": 3,
  "type_label": "\u83dc\u5355",
  "children": [{
    "id": 2,
    "pid": 1,
    "type": "menu",
    "name": "workplace",
    "title": "\u5de5\u4f5c\u53f0",
    "icon": "fa fa-dashboard",
    "method": "get",
    "url": "\/dashboard\/workplace",
    "sort": 0,
    "created_at": "2021-09-24 07:32:54",
    "type_label": "\u83dc\u5355"
  }, {
    "id": 3,
    "pid": 1,
    "type": "menu",
    "name": "el-icon-monitor",
    "title": "\u76d1\u63a7\u9875",
    "icon": "el-icon-monitor",
    "method": "get",
    "url": "\/dashboard\/monitor",
    "sort": 0,
    "created_at": "2021-09-24 07:32:54",
    "type_label": "\u83dc\u5355"
  }, {
    "id": 4,
    "pid": 1,
    "type": "menu",
    "name": "analysis",
    "title": "\u5206\u6790\u9875",
    "icon": "el-icon-data-analysis",
    "method": "get",
    "url": "\/dashboard\/analysis",
    "sort": 0,
    "created_at": "2021-09-24 07:32:54",
    "type_label": "\u83dc\u5355"
  }]
}, {
  "id": 5,
  "pid": 0,
  "type": "menu",
  "name": "SystemMange",
  "title": "\u7cfb\u7edf\u7ba1\u7406",
  "icon": "el-icon-menu",
  "method": "get",
  "url": "\/system",
  "sort": 0,
  "created_at": "2021-09-24 07:32:54",
  "children_count": 4,
  "type_label": "\u83dc\u5355",
  "children": [{
    "id": 6,
    "pid": 5,
    "type": "menu",
    "name": "UserManage",
    "title": "\u7528\u6237\u7ba1\u7406",
    "icon": "el-icon-user-solid",
    "method": "get",
    "url": "\/system\/users",
    "sort": 0,
    "created_at": "2021-09-24 07:32:54",
    "type_label": "\u83dc\u5355"
  }, {
    "id": 7,
    "pid": 5,
    "type": "menu",
    "name": "RoleManage",
    "title": "\u89d2\u8272\u7ba1\u7406",
    "icon": "fa fa-sitemap",
    "method": "get",
    "url": "\/system\/roles",
    "sort": 0,
    "created_at": "2021-09-24 07:32:54",
    "type_label": "\u83dc\u5355"
  }, {
    "id": 8,
    "pid": 5,
    "type": "menu",
    "name": "PermissionManage",
    "title": "\u6743\u9650\u7ba1\u7406",
    "icon": "fa fa-linode",
    "method": "get",
    "url": "\/system\/menus",
    "sort": 0,
    "created_at": "2021-09-24 07:32:54",
    "type_label": "\u83dc\u5355"
  }, {
    "id": 9,
    "pid": 5,
    "type": "menu",
    "name": "ConfigManage",
    "title": "\u914d\u7f6e\u7ba1\u7406",
    "icon": "el-icon-setting",
    "method": "get",
    "url": "\/system\/configs",
    "sort": 0,
    "created_at": "2021-09-24 07:32:54",
    "type_label": "\u83dc\u5355"
  }]
}];


export default [
  {
    url: '/backend/permissions',
    method: 'get',
    response: ({query}) => {
      const {pid, page} = query;
      let items = lists;
      if (pid) {
        items = lists.find(item => item.id === pid);
      }
      return responsePageSuccess(items, page)
    }
  },
  {
    url: '/backend/permissions',
    method: 'post',
    response: () => {
      const item = lists[0];
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/permissions/:id',
    method: 'get',
    response: ({query}) => {
      const item = lists[0];
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/permissions/:id',
    method: 'put',
    response: ({query}) => {
      const {id} = query;
      const item = lists[0];
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/permissions/:id',
    method: 'delete',
    response: ({query}) => {
      const {id} = query;
      const item = lists[0];
      return responseSuccess(item)
    }
  },
];