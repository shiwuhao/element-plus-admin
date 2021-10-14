import Mock from "mockjs";

export const getFunnelData = () => {
  return {
    title: {
      text: 'Funnel'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          {value: 60, name: 'Visit'},
          {value: 40, name: 'Inquiry'},
          {value: 20, name: 'Order'},
          {value: 80, name: 'Click'},
          {value: 100, name: 'Show'}
        ]
      }
    ]
  };
}
export const getBarPolarStack = () => {
  return {
    angleAxis: {},
    radiusAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu'],
      z: 10
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }
    ],
    legend: {
      show: true,
      data: ['A', 'B', 'C']
    }
  };
}

export const getGradientStackedData = (echarts) => {
  return {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgba(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgba(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(55, 162, 255)'
            },
            {
              offset: 1,
              color: 'rgba(116, 21, 219)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 0, 135)'
            },
            {
              offset: 1,
              color: 'rgba(135, 0, 157)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 191, 0)'
            },
            {
              offset: 1,
              color: 'rgba(224, 62, 76)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  };
}
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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series'
        },
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [[{type: 'min'}, {type: 'max'}]]
        }
      },
      {
        name: 'Baidu',
        type: 'bar',
        barWidth: 5,
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name: 'Google',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 290, 230, 220]
      },
      {
        name: 'Bing',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71, 74, 190, 130, 110]
      },
      {
        name: 'Others',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [62, 82, 91, 84, 109, 110, 120]
      },
    ]
  };
}

export const rankColumn = () => {
  return [
    {
      label: '排名',
      prop: 'rank',
      width: 80
    },
    {
      label: '城市',
      prop: 'city',
    },
    {
      label: '门店',
      prop: 'title',
    },
    {
      label: '金额',
      prop: 'num',
    },
  ]
}

export const rankData = () => {
  const data = [];
  for (let i = 0; i < 8; i++) {
    const item = {
      rank: i + 1,
      title: Mock.Random.ctitle(5),
      city: Mock.Random.city(),
      num: Mock.Random.natural(100000, 500000)
    };
    data.push(item)
  }
  return data;
}