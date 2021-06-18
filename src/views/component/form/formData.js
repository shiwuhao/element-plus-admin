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
      label: 'Input',
      component: 'Input',
      componentProps: {
        placeholder: '这是一个Input表单',
      },
    },
    {
      field: 'InputNumber',
      label: 'InputNumber',
      component: 'InputNumber',
      componentProps: {
        placeholder: '这是一个InputNumber表单',
      },
    },
    {
      field: 'Select',
      label: 'select',
      component: 'Select',
      componentProps: {
        placeholder: '这是一个Select',
        options: [
          {
            label: '选项1',
            value: 'value1',
          },
          {
            label: '选项2',
            value: 'value2',
          }
        ],
      },
    },
    {
      field: 'cascader',
      label: 'Cascader',
      component: 'Cascader',
      componentProps: {
        placeholder: '这是一个Cascader',
        collapseTags: true,
        options: cascaderOptions,
        change: () => {
          console.log(111);
        }
      },
    },
    {
      field: 'slider',
      label: 'slider',
      component: 'Slider',
      componentProps: {
        placeholder: '这是一个Input表单',
      }
    },
    {
      field: 'Switch',
      label: 'Switch',
      component: 'Switch',
      componentProps: {
        placeholder: 'Switch',
      }
    },
    {
      field: 'TimePicker',
      label: 'TimePicker',
      component: 'TimePicker',
      componentProps: {
        placeholder: 'TimePicker',
      }
    },
    {
      field: 'TimeSelect',
      label: 'TimeSelect',
      component: 'TimeSelect',
      componentProps: {
        placeholder: 'TimeSelect',
      }
    },
    {
      field: 'DatePicker',
      label: 'DatePicker',
      component: 'DatePicker',
      componentProps: {
        placeholder: 'DatePicker',
        type: 'date',
        format: 'YYYY-MM-DD',
        valueFormat: 'YYYY-MM-DD',
        onChange: (e) => {
          console.log(e)
        },
      }
    },
    {
      field: 'DateTimePicker',
      label: 'DateTimePicker',
      component: 'DatePicker',
      componentProps: {
        placeholder: 'DateTimePicker',
        type: 'datetime',
      }
    },
  ];
}