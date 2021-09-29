import {responseSuccess} from "./_utils.js";

const token = {access_token: 'mockAdminToken'};

export default [
  {
    url: '/backend/login',
    method: 'post',
    response: (e) => {
      return responseSuccess(token)
    }
  },
  {
    url: '/backend/logout',
    method: 'get',
    response: () => {
      return responseSuccess([])
    }
  }
];