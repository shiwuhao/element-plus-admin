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
      status_label: "开启",
      permission_ids: [4, 2, 9, 17, 16, 15, 14, 13, 12, 11, 10, 8, 28, 29, 30, 31, 32, 33, 7, 26, 23, 24, 25, 27],
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
    response: () => {
      const item = lists[0];
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/roles/:id',
    method: 'get',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === (id | 0));
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/roles/:id',
    method: 'put',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === (id | 0));
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/roles/:id',
    method: 'delete',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id === (id | 0));
      return responseSuccess(item)
    }
  },
];