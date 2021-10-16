import Mock from "mockjs";

export const getProjectData = () => {
  const result = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      title: Mock.Random.ctitle(),
      time: Mock.Random.datetime('m-d H:m'),
      image: Mock.Random.image('32x32'),
      desc: Mock.Random.cparagraph(),
      name: Mock.Random.cname()
    });
  }
  return result;
};

export const getDynamicData = () => {
  const result = [];
  for (let i = 0; i < 7; i++) {
    result.push({
      title: Mock.Random.ctitle(),
      time: Mock.Random.datetime('m-d H:m'),
      image: Mock.Random.image('60x60'),
      desc: Mock.Random.cparagraph(100, 200),
      name: Mock.Random.cname()
    });
  }
  return result;
};

export const getFunnelData = () => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      data: [
        'Direct',
        'Marketing',
        'Search Engine',
        'Email',
        'Union Ads',
      ]
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 1548, name: 'Search Engine'},
          {value: 775, name: 'Direct'},
          {value: 679, name: 'Marketing', selected: true}
        ]
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['45%', '60%'],
        labelLine: {
          length: 30
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: [
          {value: 335, name: 'Direct'},
          {value: 310, name: 'Email'},
          {value: 251, name: 'Google'},
          {value: 234, name: 'Union Ads'},
        ]
      }
    ]
  };
}

export const getCoverData = () => {
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push({
      title: Mock.Random.ctitle(),
      image: Mock.Random.image('600x178'),
    });
  }
  return result;
}