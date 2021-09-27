import {responsePageSuccess, responseSuccess} from "../_utils";

const lists = (() => {
  const result = [];
  for (let index = 0; index < 4; index++) {
    result.push({
      id: `${index + 1}`,
      name: ['SuperAdministrator', 'Admin', 'Telemarketer', 'TelemarketerManager'][index],
      title: ['超级管理员', '管理员', '电销人员', '电销管理'][index],
      remark: '',
      status: 1,
      status_label: "\u6b63\u5e38",
      permission_ids: [1, 2, 3, 4, 5, 6, 7,],
      created_at: "2021-09-24 07:32:54",
    });
  }
  return result;
})();


export default [
  {
    url: '/backend/roles',
    method: 'get',
    response: ({query}) => {
      const {page} = query;
      return responsePageSuccess(lists, page)
    }
  },
  {
    url: '/backend/roles',
    method: 'post',
    response: ({query}) => {
      const {page} = query;
      return responsePageSuccess(lists, page)
    }
  },
  {
    url: '/backend/roles/:id',
    method: 'get',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === id);
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/roles/:id',
    method: 'put',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === id);
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/roles/:id',
    method: 'delete',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === id);
      return responseSuccess(item)
    }
  },
];