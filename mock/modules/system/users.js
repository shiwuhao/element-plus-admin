import {responsePageSuccess, responseSuccess} from "../../_utils.js";
import {lists as roles} from "./roles.js";

const lists = (() => {
  const result = [];
  for (let index = 0; index < 32; index++) {
    result.push({
      id: `${index + 1}`,
      username: '@email',
      nickname: '@cname()',
      avatar: '',
      gender: 0,
      source: "1",
      status: 1,
      status_label: "\u6b63\u5e38",
      roles: [roles[Math.floor((Math.random() * roles.length))]],
      created_at: "2021-09-24 07:32:54",
    });
  }
  return result;
})();

const item = (id) => {
  return {
    id: id,
    username: '@email',
    nickname: '@cname()',
    avatar: '',
    gender: 0,
    source: "1",
    status: 1,
    status_label: "\u6b63\u5e38",
    created_at: "2021-09-24 07:32:54",
  };
};

export default [
  {
    url: '/backend/users',
    method: 'get',
    response: ({query}) => {
      const {page} = query;
      return responsePageSuccess(lists, page)
    }
  },
  {
    url: '/backend/users',
    method: 'post',
    response: ({query}) => {
      const {page} = query;
      // const lists = lists();
      return responsePageSuccess(lists, page)
    }
  },
  {
    url: '/backend/users/:id',
    method: 'get',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id == id);
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/users/:id',
    method: 'put',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id == id);
      return responseSuccess(item)
    }
  },
  {
    url: '/backend/users/:id',
    method: 'delete',
    response: ({query}) => {
      const {id} = query;
      const item = lists.find(item => item.id == id);
      return responseSuccess(item)
    }
  },
];