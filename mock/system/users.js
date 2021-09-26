import {responsePageSuccess} from "../_utils";

let Mock = require('mockjs');

const lists = Mock.mock({
  'data|35': [{
    'id|+1': 1,
    'email': '@email',
    'name': '@name',
    'role': '@role',
    'created_at': '@datetime',
  }],
});

export default  [
  {
    url: '/backend/users',
    method: 'get',
    response: () => {
      return responsePageSuccess(lists)
    }
  }
];