export const settingList = [
  {
    key: '1',
    name: '基本设置',
    component: 'BaseSetting',
  },
  {
    key: '2',
    name: '安全设置',
    component: 'SafeSetting',
  },
  {
    key: '3',
    name: '账号绑定',
    component: 'AccountBind',
  },
  {
    key: '4',
    name: '新消息通知',
    component: 'MsgNotify',
  },
];
export const safeSettingList = [
  {
    key: '1',
    title: '账户密码',
    label: '当前密码强度',
    value: '强',
    extra: '修改',
  },
  {
    key: '2',
    title: '密保手机',
    label: '已绑定手机',
    value: '138****8293',
    extra: '修改',
  },
  {
    key: '3',
    title: '密保问题',
    label: '密保问题',
    value: '未设置密保问题，密保问题可有效保护账户安全',
    extra: '修改',
  },
  {
    key: '4',
    title: '备用邮箱',
    label: '已绑定邮箱',
    value: 'ant***sign.com',
    extra: '修改',
  }
]
export const accountBindList = [
  {
    key: '1',
    title: '绑定淘宝',
    label: '当前未绑定淘宝账号',
    extra: '绑定',
    avatar: 'zhifubao',
    color: '#ff4000',
  },
  {
    key: '2',
    title: '绑定支付宝',
    label: '当前未绑定支付宝账号',
    extra: '绑定',
    avatar: 'zhifubao',
    color: '#2eabff',
  },
  {
    key: '3',
    title: '绑定钉钉',
    label: '当前未绑定钉钉账号',
    extra: '绑定',
    avatar: 'zhifubao',
    color: '#2eabff',
  }
]
export const msgNotifyList = [
  {
    key: '1',
    title: '账户密码',
    label: '其他用户的消息将以站内信的形式通知',
    status: true
  },
  {
    key: '2',
    title: '系统消息',
    label: '系统消息将以站内信的形式通知',
    status: false
  },
  {
    key: '3',
    title: '待办任务',
    label: '待办任务将以站内信的形式通知',
    status: true
  }
]