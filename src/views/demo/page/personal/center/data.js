import Mock from "mockjs";

export const getProjectData = (count = 27) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      title: Mock.Random.ctitle(),
      time: '2021/12/12 12:12',
      image: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLJt7bicBACKAWlkCacxl072UAfaOsxQgfbfpquHItiaPsDj4CoaC9Q02sI0DhSZdnKlQaUAb2E8Vicg/132',
      desc: Mock.Random.cparagraph(1,10),
      name: Mock.Random.cname()
    });
  }
  return result;
};

export const getTeamData = () => {
  return [
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
  ];
}

export const getTagData = () => {
  return [
    {name: 'Tag 1', type: ''},
    {name: 'Tag 2', type: 'success'},
    {name: 'Tag 3', type: 'info'},
    {name: 'Tag 4', type: 'warning'},
    {name: 'Tag 5', type: 'danger'},
    {name: 'Tag 6', type: 'danger'},
    {name: 'Tag 7', type: 'danger'},
    {name: 'Tag 8', type: 'danger'},
    {name: 'Tag 9', type: 'danger'},
    {name: 'Tag 10', type: 'danger'},
    {name: 'Tag 11', type: 'danger'},
    {name: 'Tag 3', type: 'info'},
    {name: 'Tag 2', type: 'success'},
    {name: 'Tag 3', type: 'info'},
    {name: 'Tag 2', type: 'success'},
  ]
}