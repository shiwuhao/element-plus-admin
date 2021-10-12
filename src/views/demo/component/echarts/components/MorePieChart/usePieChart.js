import {onMounted, ref, shallowReactive, toRefs} from "vue";
// https://www.makeapie.com/editor.html?c=xAqxk9ZhVv
export function usePieChart() {
  const echarts = ref(null);
  const data = [
    {
      name: '饼图1',
      value: 54
    },{
      name: '饼图2',
      value: 44
    },{
      name: '饼图3',
      value: 35
    },{
      name: '饼图4',
      value: 30
    },{
      name: '饼图5',
      value: 20
    }]
  const seriesArr = [];
  const titleArr = [];
  const colors=[['#389af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'],['#a181fc', '#e3d9fe']];
  data.forEach((item,index)=>{
    seriesArr.push(
      {
        name: item.name,
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        itemStyle:  {
          normal: {
            color: colors[index][0],
            shadowColor: colors[index][0],
            shadowBlur: 0,
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
          }
        },
        hoverAnimation: false,
        center: [index * 20 + 10 +'%', '50%'],
        data: [{
          value: item.value,
          label: {
            normal: {
              formatter: function(params){
                return params.value+'%';
              },
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold',
                color: colors[index][0]
              }
            }
          },
        }, {
          value: 100-item.value,
          name: 'invisible',
          itemStyle: {
            normal: {
              color: colors[index][1]
            },
            emphasis: {
              color: colors[index][1]
            }
          }
        }]
      }
    );
      titleArr.push(
        {
          text:item.name,
          left: index * 20 + 10 +'%',
          top: '65%',
          textAlign: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: colors[index][0],
            textAlign: 'center',
          },
        }
      );
  })
  const state = shallowReactive(
    {
      id: 'id_' + new Date().getTime(),
      height: '700px',
      chartData: {
        series: seriesArr,
        title: titleArr
      }
    })

  onMounted(() => {
    echarts.value.initChart();
  })
  return {
    echarts,
    ...toRefs(state),
  }
}