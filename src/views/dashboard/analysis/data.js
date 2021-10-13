export const getGrowData = () => {
  return [
    {
      title: '访问量',
      notice: '最近一周访问量',
      description: '比上周增加30%',
      value: '4.2K',
      chart: 'bar',
      chartStyle: {width: '100%', height: '50px'},
      chartOption: {
        tooltip: {trigger: 'axis',},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false
        },
        yAxis: {type: 'value', show: false},
        series: [
          {
            data: [30, 52, 30, 20, 30, 45, 30],
            type: 'bar'
          }
        ]
      }
    },
    {
      title: '销售额',
      notice: '最近一周销售额',
      description: '比上周增加20%',
      value: '￥12640',
      chartStyle: {width: '100%', height: '50px'},
      chartOption: {
        tooltip: {trigger: 'axis',},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false
        },
        yAxis: {type: 'value', show: false},
        series: [
          {
            data: [30, 52, 30, 20, 30, 45, 30],
            type: 'line'
          }
        ]
      }
    },
    {
      title: '用户增长',
      notice: '最近一周用户增长量',
      description: '45.5%来自facebook',
      value: '44150',
      chartStyle: {width: '100%', height: '50px'},
      chartOption: {
        tooltip: {},
        series: [
          {
            type: 'pie',
            radius: '100%',
            data: [
              {value: 1048, name: 'Mobile'},
              {value: 735, name: 'Username'},
              {value: 580, name: 'Email'},
            ],
          }
        ]
      }
    },
    {
      title: '订单量',
      notice: '最近一周订单量',
      description: '45.5%来自微信小程序',
      value: '12640',
      chartStyle: {width: '100%', height: '50px'},
      chartOption: {
        tooltip: {},
        series: [
          {
            type: 'pie',
            radius: ['60%', '100%'],
            data: [
              {value: 1048, name: 'wechat'},
              {value: 735, name: 'H5'},
              {value: 580, name: 'App'},
            ],
          }
        ]
      }
    },
  ]
}

export const getVisitData = () => {
  return {
    title: {
      text: '近一年销售情况',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
}

export const growCardData = [
  {
    id: 1,
    title: '散点图',
    value: 12640,
    total: 12432,
    subTitle: '日销售额',
    component: 'ScatterChart'
  },
  {
    id: 2,
    title: '折线图',
    value: 8846,
    total: 1234,
    subTitle: '日访问量',
    component: 'LineChart'
  },
  {
    id: 3,
    title: '柱状图',
    value: 6560,
    total: '60%',
    subTitle: '转化率',
    component: 'BarChart'
  },
  {
    id: 4,
    title: '饼图',
    value: '78%',
    total: '12%',
    subTitle: '周同比',
    component: 'PieChart'
  }
]
export const rankingData = () => {
  return [
    {
      title: '那里是天堂',
      num: '323,234'
    },
    {
      title: '那里是天堂',
      num: '323,234'
    },
    {
      title: '那里是天堂',
      num: '323,234'
    },
    {
      title: '那里是天堂',
      num: '323,234'
    },
    {
      title: '那里是天堂',
      num: '323,234'
    },
    {
      title: '那里是天堂',
      num: '323,234'
    },
    {
      title: '那里是天堂',
      num: '323,234'
    },
    {
      title: '那里是天堂',
      num: '323,234'
    }
  ];
}

export const shopData = [];

export const tableData = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  }
]
export const saleCategory = [
  {
    name: 'first',
    label: '全部渠道',
    component: 'LineChart'
  },
  {
    name: 'second',
    label: '线上',
    component: 'RadarChart'
  },
  {
    name: 'third',
    label: '门店',
    component: 'PieChart'
  }
]