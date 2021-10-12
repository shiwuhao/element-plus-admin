import * as echarts from "echarts/core";

// 引入图表
import {
  BarChart,
  LineChart,
  PieChart,
} from 'echarts/charts';

// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  ToolboxComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';

// 标签自动布局，全局过渡动画等特性
import {LabelLayout, UniversalTransition} from "echarts/features";

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  ToolboxComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  TooltipComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LineChart,
  PieChart,
])

export default echarts;