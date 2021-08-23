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
export const personalInfo = [
  {
    icon: 'el-icon-user',
    title: 'web前端开发工程师',
  },
  {
    icon: 'el-icon-s-grid',
    title: '某某某事业群',
  },
  {
    icon: 'el-icon-s-home',
    title: '北京市朝阳区',
  }
]
export const activeTab = [
  {
    key: '1',
    name: '文章',
    component: 'Article',
  },
  {
    key: '2',
    name: '应用',
    component: 'Application',
  },
  {
    key: '3',
    name: '项目',
    component: 'Project',
  },
]
export const applicationList = (() => {
  const result = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vben Admin',
      url: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    });
  }
  return result;
})();
export const applicationActions = [
  { icon: 'el-icon-download', fontSize: '14px', color: 'rgba(0,0,0,.45)',text: '下载' },
  { icon: 'el-icon-edit', fontSize: '14px', color: 'rgba(0,0,0,.45)',text: '编辑'  },
  { icon: 'el-icon-share', fontSize: '14px', color: 'rgba(0,0,0,.45)',text: '分享'  },
  { icon: 'el-icon-more-outline',fontSize: '14px', color: 'rgba(0,0,0,.45)' },
];
export const projectList = (() => {
  const result = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vben Admin',
      time: '2小时前',
      url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
      content: '基于Vue Next, TypeScript, Ant Design实现的一套完整的企业级后台管理系统。',
    });
  }
  return result;
})();
