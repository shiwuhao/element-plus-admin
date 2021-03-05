import Mock from 'mockjs';

const code = 200;

const baseData = {
  code: code,
  data: {},
  msg: '',
};
// 登录
const loginData = {
  ...baseData, ...{
    data: {
      access_token: '12312312321',
    }
  }
};

// 任务列表
const userInfoData = {
  ...baseData, ...{
    data: {
      user: {
        email: 'shiwuhao@juzifenqi.com',
        real_name: '石武浩2',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      },
      roles: ['Administrator'],
    },
  }
};

const userListData = Mock.mock({
  'data|15': [{
    'id|+1': 1,
    'email': '@email',
    'name': '@name',
    'role': '@role',
    'created_at': '@datetime',
  }],
  'meta': {
    current_page: 2,
    from: 16,
    last_page: 5,
    path: "http://user-operate.juzifenqi.com:8080/api/users",
    per_page: 15,
    to: 30,
    total: 73,
  }
});
Mock.mock(/\/api\/user-info/, 'get', userInfoData);// 用户信息
Mock.mock(/\/api\/users/, 'get', userListData);// 登录
Mock.mock(/\/api\/login/, 'post', loginData)//登录
Mock.mock(/\/api\/logout/, 'post')//登出