import Mock from 'mockjs';

const code = 200;

const baseData = {
  code: code,
  data: {},
  msg: '',
};

const uploadListData = Mock.mock({
  'data|35': [{
    'id|+1': 1,
    'url': '@url',
  }]
});
Mock.mock(/\/api\/uploads/, 'get', uploadListData);// 登录