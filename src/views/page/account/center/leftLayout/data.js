export const teams = [
  {
    icon: 'el-icon-edit',
    title: '科学搬砖组',
    color: '#ff4000',
  },
  {
    icon: 'el-icon-share',
    title: '中二少年团',
    color: '#7c51b8',
  },
  {
    icon: 'el-icon-share',
    title: '高逼格设计',
    color: '#00adf7',
  },
  {
    icon: 'el-icon-share',
    title: '程序员日常',
    color: '#00adf7',
  },
  {
    icon: 'el-icon-edit',
    title: '科学搬砖组',
    color: '#7c51b8',
  },
  {
    icon: 'el-icon-edit',
    title: '程序员日常',
    color: '#ff4000',
  },
]
export const articleList = (()=>{
  const list = [];
  for(let i=0 ;i < 4;i++){
    list.push({
      title: 'Element Plus',
      description: ['Element', '设计语言', 'JS'],
      content: '基于Vue3.0, Element-UI实现的一套完整的企业级后台管理系统。',
      time: '2020-11-14 11:20',
      user: '可可',
      icon: 'el-icon-sunny',
      url: 'https://ant.design'
    })
  }
  return list;
})()
export const articleAction = [
  { icon: 'el-icon-star-off', text: '156', color: '#018ffb' },
  { icon: 'el-icon-thumb', text: '156', color: '#459ae8' },
  { icon: 'el-icon-chat-dot-round', text: '2', color: '#42d27d' },
]