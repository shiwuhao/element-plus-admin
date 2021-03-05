<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="card-header">基本使用</div>
      <el-form :inline="true" :model="config" label-position="right" label-width="100px" class="demo-form-inline">
        <el-form-item label="显示label">
          <el-switch v-model="config.showLabel"></el-switch>
        </el-form-item>
        <el-form-item label="图标按钮">
          <el-switch v-model="config.iconButton"></el-switch>
        </el-form-item>
        <el-form-item label="可清空">
          <el-switch v-model="config.clearable"></el-switch>
        </el-form-item>
        <el-form-item label="尺寸">
          <el-radio-group v-model="config.size" size="mini">
            <el-radio-button label="medium"></el-radio-button>
            <el-radio-button label="small"></el-radio-button>
            <el-radio-button label="mini"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="label宽度">
          <el-input-number v-model="config.labelWidth" :min="100" :max="300" label="描述文字"></el-input-number>
        </el-form-item>
      </el-form>
      <query-form :options="options1"
                  :label="config.showLabel"
                  :iconButton="config.iconButton"
                  :size="config.size"
                  :label-width="`${config.labelWidth}px`"
                  :clearable="config.clearable"
                  @search="form1 = $event"
                  @reset="form1 = {}"></query-form>
      <pre><code>{{ form1 }}</code></pre>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="card-header">自定义插槽</div>
      <query-form :options="options2" @search="search" @reset="reset">
        <el-form-item slot="custom-slot" style="margin-bottom: 2px;margin-top:2px;">
          <el-input v-model="customSlot" placeholder="我是自定义插槽渲染的"/>
        </el-form-item>
        <template slot="button">
          <el-button type="primary">下载</el-button>
        </template>
      </query-form>
      <pre><code>{{ form2 }}</code></pre>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="card-header">双向绑定</div>
      <query-form v-model="form3" :options="options3"></query-form>
      <pre><code>{{ form3 }}</code></pre>
    </el-card>
  </div>
</template>
<style>
  .box-card {
    margin-top: 10px;
  }

  .card-header {
    font-size: 14px;
  }
</style>
<script>

  import QueryForm from "@/components/Table/QueryForm";

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
              label: 'Layout 布局'
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
    name: 'Test',
    components: {
      QueryForm
    },
    data() {
      return {
        searchForm: {},
        config: {
          showLabel: true,
          iconButton: false,
          clearable: true,
          size: 'mini',
          labelWidth: 100

        },
        options1: [
          {
            type: 'input',
            key: 'input',
            label: '基础表单',
          },
          {
            type: 'select',
            key: 'single-select',
            label: '单选下拉框单',
            options: [
              {value: '选项1', label: '黄金糕'},
              {value: '选项2', label: '双皮奶'},
              {value: '选项3', label: '蚵仔煎'},
              {value: '选项4', label: '龙须面'},
              {value: '选项5', label: '北京烤鸭'},
            ]
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
        options2: [
          {
            slot: 'custom-slot'
          },
          {
            type: 'select',
            key: 'selectKey',
            label: '下拉框',
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
            label: "时间",
            displayType: 'date',
          },
          {
            type: 'time-picker',
            key: 'time',
            label: "时间",
            // valueFormat: 'h:m:s',
          },
          {
            type: 'input',
            key: 'key',
            label: 'input框',
            placeholder: '请输入搜索条件',
          },
        ],
        options3: [
          {
            slot: 'custom-slot'
          },
          {
            type: 'select',
            key: 'single-select',
            label: '单选下拉框',
            options: [
              {value: '选项1', label: '黄金糕'},
              {value: '选项2', label: '双皮奶'},
              {value: '选项3', label: '蚵仔煎'},
              {value: '选项4', label: '龙须面'},
              {value: '选项5', label: '北京烤鸭'},
            ]
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
            label: "时间",
            displayType: 'date',
          },
          {
            type: 'time-picker',
            key: 'time',
            label: "时间",
            // valueFormat: 'h:m:s',
          },
          {
            type: 'input',
            key: 'key',
            label: 'input框',
            placeholder: '请输入搜索条件',
          },
        ],
        form1: {},
        form2: {},
        form3: {},
        customSlot: '',
      }
    },
    methods: {
      search(form) {
        this.form2 = {...form, ...{customSlot: this.customSlot}};
      },
      reset() {
        this.form2 = {};
        this.customSlot = '';
      },
    }
  }
</script>
