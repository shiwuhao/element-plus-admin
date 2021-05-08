<template>
  <el-card title="系统配置">
    <template #header>
      <div>{{ cardTitle}}</div>
    </template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <el-row>
          <el-col :span="12">
            <AutoForm label :options="options"></AutoForm>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
  import AutoForm from "@/components/AutoForm/AutoForm";
  const cascaderData = [
    {
      value: 'zhinan',
      label: '指南',
      children: [
        {
          value: 'shejiyuanze',
          label: '设计原则',
          children: [
            {
              value: 'yizhi',
              label: '一致'
            },
            {
              value: 'fankui',
              label: '反馈'
            },
            {
              value: 'xiaolv',
              label: '效率'
            },
            {
              value: 'kekong',
              label: '可控'
            }
          ]
        },
        {
          value: 'daohang',
          label: '导航',
          children: [
            {
              value: 'cexiangdaohang',
              label: '侧向导航'
            },
            {
              value: 'dingbudaohang',
              label: '顶部导航'
            }
          ]
        }
      ]
    }, {
      value: 'zujian',
      label: '组件',
      children: [
        {
          value: 'basic',
          label: 'Basic',
          children: [
            {
              value: 'layout',
              label: 'layouts 布局'
            },
            {
              value: 'color',
              label: 'Color 色彩'
            },
            {
              value: 'typography',
              label: 'Typography 字体'
            },
            {
              value: 'icon',
              label: 'Icon 图标'
            },
            {
              value: 'button',
              label: 'Button 按钮'
            }
          ]
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio 单选框'
            },
            {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            },
            {
              value: 'input',
              label: 'Input 输入框'
            },
          ]
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table 表格'
            },
            {
              value: 'tag',
              label: 'Tag 标签'
            },
            {
              value: 'progress',
              label: 'Progress 进度条'
            },
            {
              value: 'tree',
              label: 'Tree 树形控件'
            },
            {
              value: 'pagination',
              label: 'Pagination 分页'
            },
            {
              value: 'badge',
              label: 'Badge 标记'
            }]
        }
      ]
    },
    {
      value: 'ziyuan',
      label: '资源',
      children: [
        {
          value: 'axure',
          label: 'Axure Components'
        },
        {
          value: 'sketch',
          label: 'Sketch Templates'
        },
        {
          value: 'jiaohu',
          label: '组件交互文档'
        }
      ]
    }
  ];
  export default {
    name: "list",
    components: {AutoForm},
    data() {
      return {
        cardTitle: this.$route.meta.title,
        activeName: 'second',
        options: [
        {
          type: 'input',
          key: 'input',
          label: '基础表单',
        },
        {
          type: 'textarea',
          key: 'textarea',
          label: '文本域',
        },
        {
          type: 'select',
          key: 'multiple-select',
          label: '多选下拉框',
          multiple: true,
          options: [
            {value: '选项1', label: '黄金糕'},
            {value: '选项2', label: '双皮奶'},
            {value: '选项3', label: '蚵仔煎'},
            {value: '选项4', label: '龙须面'},
            {value: '选项5', label: '北京烤鸭'},
          ]
        },
        {
          type: 'date-picker',
          key: 'date',
          label: "年月日",
          displayType: 'date',
        },
        {
          type: 'time-picker',
          key: 'time',
          label: "时分秒",
          valueFormat: 'h:m:s',
        },
        {
          type: 'date-picker',
          key: 'daterange',
          label: "日期范围",
          displayType: 'daterange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        },
        {
          type: 'date-picker',
          key: 'monthrange',
          label: "月份范围",
          displayType: 'monthrange',
          rangeSeparator: '至',
          startPlaceholder: '开始月份',
          endPlaceholder: '结束月份',
        },
        {
          type: 'time-picker',
          key: 'timerange',
          label: "时间范围",
          displayType: 'timerange',
          valueFormat: 'HH:mm:ss',
          rangeSeparator: '至',
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
        },
        {
          type: 'cascader',
          key: 'cascader',
          label: "级联选择",
          options: cascaderData
        },
        {
          type: 'cascader',
          key: 'cascader-show-last',
          label: "级联选择",
          placeholder: '级联选择展示最后一项',
          showAllLevels: false,
          options: cascaderData
        },
        {
          type: 'input',
          key: 'key',
          label: 'input框',
          placeholder: '请输入搜索条件',
        },
      ],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>