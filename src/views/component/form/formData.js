const options = [
  {
    label: '选项1',
    value: 'value1',
  },
  {
    label: '选项2',
    value: 'value2',
  },
  {
    label: '选项3',
    value: 'value3',
  }
];

const cascaderOptions = [
  {
    label: '选项1',
    value: 'value1',
    children: [
      {label: '选项3', value: 'value1',},
      {label: '选项4', value: 'value1',}
    ]
  },
  {
    label: '选项2',
    value: 'value2',
    children: [
      {label: '选项4', value: 'value1',},
      {label: '选项5', value: 'value1',}
    ]
  },
];


export function getFormData() {
  return [
    {
      field: 'input',
      label: '输入框',
      component: 'Input',
      componentProps: {
        placeholder: '这是一个Input表单',
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'input_number',
      label: '计数器',
      component: 'InputNumber',
      componentProps: {
        placeholder: '这是一个InputNumber表单',
        style: {
          minWidth: '300px'
        }
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'select',
      label: '选择器',
      component: 'Select',
      componentProps: {
        placeholder: '这是一个Select',
        options: options
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'cascader',
      label: '级联选择器',
      component: 'Cascader',
      componentProps: {
        placeholder: '这是一个Cascader',
        collapseTags: true,
        options: cascaderOptions,
        change: () => {
          console.log(111);
        }
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'slider',
      label: '滑块',
      component: 'Slider',
      componentProps: {
        placeholder: '这是一个Input表单',
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'switch',
      label: '开关',
      component: 'Switch',
      componentProps: {
        placeholder: 'Switch',
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'time_picker',
      label: '时间选择器',
      component: 'TimePicker',
      componentProps: {
        placeholder: 'TimePicker',
        valueFormat: 'HH:mm:ss',
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'time_select',
      label: '时间选择器',
      component: 'TimeSelect',
      componentProps: {
        placeholder: 'TimeSelect',
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'date_picker',
      label: '日期选择器',
      component: 'DatePicker',
      componentProps: {
        placeholder: 'DatePicker',
        type: 'date',
        format: 'YYYY-MM-DD',
        valueFormat: 'YYYY-MM-DD',
        onChange: (e) => {
          console.log(e)
        },
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'date_time_picker',
      label: '日期时间选择器',
      component: 'DatePicker',
      componentProps: {
        placeholder: 'DateTimePicker',
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        type: 'datetime',
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'radio_group',
      label: '单选框',
      component: 'RadioGroup',
      componentProps: {
        placeholder: 'RadioGroup',
        options: options,
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'radio_button_group',
      label: '单选框按钮',
      component: 'RadioButtonGroup',
      componentProps: {
        placeholder: 'RadioButtonGroup',
        options: options,
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'checkbox_group',
      label: '多选框',
      component: 'CheckboxGroup',
      componentProps: {
        options: options,
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'checkbox_button_group',
      label: '多选框按钮',
      component: 'CheckboxButtonGroup',
      componentProps: {
        options: options,
      },
      colProps: {
        span: 12
      }
    },
    {
      field: 'upload',
      label: '上传',
      component: 'Upload',
      componentProps: {
        action: "https://jsonplaceholder.typicode.com/posts/",
        listType: "text",
        tips: '我是一个温馨小提示',
        fileList: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
        ]
      },
      colProps: {
        span: 12
      }
    },
  ];
}