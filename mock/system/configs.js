import {responsePageSuccess, responseSuccess} from "../_utils";

const items = {
  "groups": [{"value": "basic", "label": "\u57fa\u7840"}, {"value": "system", "label": "\u7cfb\u7edf"}],
  "types": [{"value": "number", "label": "\u6570\u5b57"}, {
    "value": "string",
    "label": "\u5b57\u7b26"
  }, {"value": "text", "label": "\u6587\u672c"}, {"value": "array", "label": "\u6570\u7ec4"}, {
    "value": "enum",
    "label": "\u679a\u4e3e"
  }],
  "components": [{"value": "input", "label": "Input\u8f93\u5165\u6846"}, {
    "value": "textarea",
    "label": "Textarea\u591a\u884c\u6587\u672c\u57df"
  }, {"value": "select", "label": "Select\u9009\u62e9\u5668"}, {
    "value": "timePicker",
    "label": "TimePicker\u65f6\u95f4\u9009\u62e9\u5668"
  }, {"value": "datePicker", "label": "DatePicker\u65e5\u671f\u9009\u62e9\u5668"}, {
    "value": "dateTimePicker",
    "label": "DateTimePicker\u65e5\u671f\u65f6\u95f4\u9009\u62e9\u5668"
  }, {"value": "upload", "label": "Upload\u4e0a\u4f20"}, {
    "value": "colorPicker",
    "label": "ColorPicker\u989c\u8272\u9009\u62e9\u5668"
  }],
  "permissions": [{
    "id": 26,
    "pid": 7,
    "type": "action",
    "name": "Role:update",
    "title": "RoleController@update",
    "icon": "",
    "method": "put",
    "url": "backend\/roles\/{role}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 18,
    "pid": 6,
    "type": "action",
    "name": "User:index",
    "title": "UserController@index",
    "icon": "",
    "method": "get",
    "url": "backend\/users",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 19,
    "pid": 6,
    "type": "action",
    "name": "User:store",
    "title": "UserController@store",
    "icon": "",
    "method": "post",
    "url": "backend\/users",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 20,
    "pid": 6,
    "type": "action",
    "name": "User:show",
    "title": "UserController@show",
    "icon": "",
    "method": "get",
    "url": "backend\/users\/{user}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 21,
    "pid": 6,
    "type": "action",
    "name": "User:update",
    "title": "UserController@update",
    "icon": "",
    "method": "put",
    "url": "backend\/users\/{user}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 22,
    "pid": 6,
    "type": "action",
    "name": "User:destroy",
    "title": "UserController@destroy",
    "icon": "",
    "method": "delete",
    "url": "backend\/users\/{user}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 23,
    "pid": 7,
    "type": "action",
    "name": "Role:index",
    "title": "RoleController@index",
    "icon": "",
    "method": "get",
    "url": "backend\/roles",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 24,
    "pid": 7,
    "type": "action",
    "name": "Role:store",
    "title": "RoleController@store",
    "icon": "",
    "method": "post",
    "url": "backend\/roles",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 25,
    "pid": 7,
    "type": "action",
    "name": "Role:show",
    "title": "RoleController@show",
    "icon": "",
    "method": "get",
    "url": "backend\/roles\/{role}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 17,
    "pid": 9,
    "type": "action",
    "name": "Config:destroy",
    "title": "ConfigController@destroy",
    "icon": "",
    "method": "delete",
    "url": "backend\/configs\/{config}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 27,
    "pid": 7,
    "type": "action",
    "name": "Role:destroy",
    "title": "RoleController@destroy",
    "icon": "",
    "method": "delete",
    "url": "backend\/roles\/{role}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 28,
    "pid": 8,
    "type": "action",
    "name": "Permission:index",
    "title": "PermissionController@index",
    "icon": "",
    "method": "get",
    "url": "backend\/permissions",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 29,
    "pid": 8,
    "type": "action",
    "name": "Permission:store",
    "title": "PermissionController@store",
    "icon": "",
    "method": "post",
    "url": "backend\/permissions",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 30,
    "pid": 8,
    "type": "action",
    "name": "Permission:autoGenerate",
    "title": "PermissionController@autoGenerate",
    "icon": "",
    "method": "post",
    "url": "backend\/permissions\/auto",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 31,
    "pid": 8,
    "type": "action",
    "name": "Permission:show",
    "title": "PermissionController@show",
    "icon": "",
    "method": "get",
    "url": "backend\/permissions\/{permission}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 32,
    "pid": 8,
    "type": "action",
    "name": "Permission:update",
    "title": "PermissionController@update",
    "icon": "",
    "method": "put",
    "url": "backend\/permissions\/{permission}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 33,
    "pid": 8,
    "type": "action",
    "name": "Permission:destroy",
    "title": "PermissionController@destroy",
    "icon": "",
    "method": "delete",
    "url": "backend\/permissions\/{permission}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
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
    "type_label": "\u83dc\u5355"
  }, {
    "id": 16,
    "pid": 9,
    "type": "action",
    "name": "Config:update",
    "title": "ConfigController@update",
    "icon": "",
    "method": "put",
    "url": "backend\/configs\/{config}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 15,
    "pid": 9,
    "type": "action",
    "name": "Config:show",
    "title": "ConfigController@show",
    "icon": "",
    "method": "get",
    "url": "backend\/configs\/{config}",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 14,
    "pid": 9,
    "type": "action",
    "name": "Config:groupUpdate",
    "title": "ConfigController@groupUpdate",
    "icon": "",
    "method": "put",
    "url": "backend\/configs\/group",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 13,
    "pid": 9,
    "type": "action",
    "name": "Config:group",
    "title": "ConfigController@group",
    "icon": "",
    "method": "get",
    "url": "backend\/configs\/group",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 12,
    "pid": 9,
    "type": "action",
    "name": "Config:store",
    "title": "ConfigController@store",
    "icon": "",
    "method": "post",
    "url": "backend\/configs",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 11,
    "pid": 9,
    "type": "action",
    "name": "Config:index",
    "title": "ConfigController@index",
    "icon": "",
    "method": "get",
    "url": "backend\/configs",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
  }, {
    "id": 10,
    "pid": 9,
    "type": "action",
    "name": "Config:configItems",
    "title": "ConfigController@configItems",
    "icon": "",
    "method": "get",
    "url": "backend\/configs\/items",
    "sort": 0,
    "created_at": "2021-09-24 07:48:40",
    "type_label": "\u64cd\u4f5c"
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
  }],
  "roles": [{
    "id": 1,
    "name": "Administrator",
    "title": "\u8d85\u7ea7\u7ba1\u7406\u5458",
    "remark": "\u5907\u6ce8",
    "status": 1,
    "deleted_at": null,
    "created_at": "2021-09-24 07:32:54",
    "status_label": "\u6b63\u5e38"
  }, {
    "id": 2,
    "name": "Test",
    "title": "\u6d4b\u8bd5\u4eba\u5458",
    "remark": "\u5907\u6ce8",
    "status": 1,
    "deleted_at": null,
    "created_at": "2021-09-24 07:32:54",
    "status_label": "\u6b63\u5e38"
  }]
}
const lists = [
  {
  "id": 1,
  "name": "WEB_SITE_TITLE",
  "title": "\u7ad9\u70b9\u540d\u79f0",
  "group": "basic",
  "type": "string",
  "component": "Input",
  "sort": 100,
  "value": "Element-Plus-admin",
  "extra": null,
  "created_at": "2021-09-28 05:53",
  "type_label": "\u5b57\u7b26",
  "group_label": "\u57fa\u7840",
  "component_label": "",
  "parse_value": "Element-Plus-admin",
  "parse_extra": [""]
}, {
  "id": 2,
  "name": "WEB_SITE_LOGO",
  "title": "\u7ad9\u70b9Logo",
  "group": "basic",
  "type": "text",
  "component": "Upload",
  "sort": 10,
  "value": "https:\/\/v3.cn.vuejs.org\/logo.png",
  "extra": null,
  "created_at": "2021-09-28 05:56",
  "type_label": "\u6587\u672c",
  "group_label": "\u57fa\u7840",
  "component_label": "",
  "parse_value": "https:\/\/v3.cn.vuejs.org\/logo.png",
  "parse_extra": [""]
}, {
  "id": 8,
  "name": "WEB_SITE_DESCRIPTION",
  "title": "\u7f51\u7ad9\u63cf\u8ff0",
  "group": "basic",
  "type": "text",
  "component": "Textarea",
  "sort": 0,
  "value": "Element-Plus,Element-Plus-Admin,",
  "extra": null,
  "created_at": "2021-09-28 11:10",
  "type_label": "\u6587\u672c",
  "group_label": "\u57fa\u7840",
  "component_label": "",
  "parse_value": "Element-Plus,Element-Plus-Admin,",
  "parse_extra": [""]
}, {
  "id": 7,
  "name": "WEB_SITE_KEYWORD",
  "title": "\u7f51\u7ad9\u5173\u952e\u5b57",
  "group": "basic",
  "type": "string",
  "component": "Textarea",
  "sort": 0,
  "value": "Element-Plus,Element-Plus-Admin,",
  "extra": null,
  "created_at": "2021-09-28 11:10",
  "type_label": "\u5b57\u7b26",
  "group_label": "\u57fa\u7840",
  "component_label": "",
  "parse_value": "Element-Plus,Element-Plus-Admin,",
  "parse_extra": [""]
}, {
  "id": 6,
  "name": "WEB_SITE_CLOSE",
  "title": "\u5173\u95ed\u7ad9\u70b9",
  "group": "system",
  "type": "enum",
  "component": "Select",
  "sort": 0,
  "value": "1",
  "extra": "0:\u5173\u95ed\n1:\u5f00\u542f",
  "created_at": "2021-09-28 11:08",
  "type_label": "\u679a\u4e3e",
  "group_label": "\u7cfb\u7edf",
  "component_label": "",
  "parse_value": "1",
  "parse_extra": ["\u5173\u95ed", "\u5f00\u542f"]
}, {
  "id": 5,
  "name": "WEB_SITE_ICP",
  "title": "\u7f51\u7ad9\u5907\u6848\u53f7",
  "group": "system",
  "type": "string",
  "component": "Input",
  "sort": 0,
  "value": "\u4eacICP\u590712007941\u53f7-2",
  "extra": null,
  "created_at": "2021-09-28 11:08",
  "type_label": "\u5b57\u7b26",
  "group_label": "\u7cfb\u7edf",
  "component_label": "",
  "parse_value": "\u4eacICP\u590712007941\u53f7-2",
  "parse_extra": [""]
}, {
  "id": 4,
  "name": "ALLOW_IP",
  "title": "\u5141\u8bb8\u8bbf\u95eeip",
  "group": "system",
  "type": "text",
  "component": "Textarea",
  "sort": 0,
  "value": "102.168.1.1\n102.168.1.2\n102.168.1.3",
  "extra": null,
  "created_at": "2021-09-28 11:07",
  "type_label": "\u6587\u672c",
  "group_label": "\u7cfb\u7edf",
  "component_label": "",
  "parse_value": "102.168.1.1\n102.168.1.2\n102.168.1.3",
  "parse_extra": [""]
}, {
  "id": 3,
  "name": "PAGE_SIZE",
  "title": "\u5206\u9875\u6761\u6570",
  "group": "system",
  "type": "number",
  "component": "Input",
  "sort": 0,
  "value": "15",
  "extra": null,
  "created_at": "2021-09-28 06:01",
  "type_label": "\u6570\u5b57",
  "group_label": "\u7cfb\u7edf",
  "component_label": "",
  "parse_value": "15",
  "parse_extra": [""]
}]

export default [
  {
    url: '/backend/configs/group',
    method: 'get',
    response: ({query}) => {
      const {group} = query
      const items = lists.filter(item => item.group === group);
      return responseSuccess(items)
    }
  },
  {
    url: '/backend/configs/items',
    method: 'get',
    response: () => {
      return responseSuccess(items)
    }
  },
  {
    url: '/backend/configs',
    method: 'get',
    response: () => {
      return responsePageSuccess(lists)
    }
  },
  {
    url: '/backend/configs',
    method: 'post',
    response: () => {
      const item = lists[0];
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/configs/:id',
    method: 'get',
    response: ({query}) => {
      const {id} = query;
      console.log(id);
      const item = lists.find(item => item.id === (id | 0));
      console.log(item);
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/configs/:id',
    method: 'put',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === (id | 0));
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/configs/:id',
    method: 'delete',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === (id | 0));
      return responseSuccess(item)
    }
  },
];