<template>
  <PageWrapper
    :title="cardTitle"
    content="收缩表单多用于列表筛选">
    <el-card class="mt-2" shadow="none" header="基础收缩示例">
      <BasicForm v-model="form"
                 :schemas="schemas"
                 :action-props="actionProps"
                 label-width="80px"
                 auto-width
                 label-position="right"></BasicForm>
    </el-card>
    <el-card class="mt-2" shadow="none" header="超过二行收起">
      <BasicForm v-model="form2"
                 :schemas="schemas"
                 :action-props="actionProps2"
                 auto-width
                 label-width="80px"
                 label-position="right"></BasicForm>
    </el-card>
    <el-card class="mt-2" shadow="none" header="按钮单独一行">
      <BasicForm v-model="form3"
                 :schemas="schemas"
                 :action-props="actionProps3"
                 auto-width
                 label-width="80px"
                 label-position="right"></BasicForm>
    </el-card>
    <el-card class="mt-2" shadow="none" header="隐藏label">
      <BasicForm v-model="form4"
                 :schemas="schemas2"
                 :action-props="actionProps4"
                 auto-width
      ></BasicForm>
    </el-card>
  </PageWrapper>
</template>
<script>
const colProps = {
  xs: {span: 24},
  sm: {span: 12},
  md: {span: 12},
  lg: {span: 8},
  xl: {span: 8},
}

import {BasicForm} from "@/components/Form/index.js";
import {selectOptions, cascaderOptions} from './formData.js'
import {PageWrapper} from '@/components/Page/index.js';

export default {
  name: 'AdvancedForm',
  components: {BasicForm, PageWrapper},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      actionProps: {
        isAdvanced: true,
        colProps: colProps,
        actionPosition: 'left',
        showAdvancedButton: true,
        resetButtonOption: {
          text: '重置'
        },
        submitButtonOption: {
          text: '搜索'
        }
      },

      actionProps2: {
        colProps: colProps,
        actionPosition: 'left',
        showAdvancedButton: true,
        showAdvancedLength: 2,
        resetButtonOption: {
          text: '重置'
        },
        submitButtonOption: {
          text: '搜索'
        }
      },

      actionProps3: {
        colProps: {
          span: 24
        },
        actionPosition: 'left',
        showAdvancedButton: true,
        showAdvancedLength: 3,
        resetButtonOption: {
          text: '重置'
        },
        submitButtonOption: {
          text: '搜索'
        }
      },
      actionProps4: {
        colProps: colProps,
        isAdvanced: true,
        actionPosition: 'left',
        showAdvancedButton: true,
        showAdvancedLength: 3,
        resetButtonOption: {
          text: '重置'
        },
        submitButtonOption: {
          text: '搜索'
        }
      },
      schemas: [
        {
          field: 'field1',
          label: 'field1',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps,
        },
        {
          field: 'field2',
          label: 'Select',
          component: 'Select',
          componentProps: {
            placeholder: '这是一个Select',
            options: selectOptions,
          },
          colProps: colProps,
        },
        {
          field: 'field2',
          label: 'field2',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps,
        },
        {
          field: 'field3',
          label: 'field3',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps,
        },
        {
          field: 'field4',
          label: 'field4',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps,
        },
      ],
      schemas2: [
        {
          field: 'field1',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps,
        },
        {
          field: 'field2',
          component: 'Select',
          componentProps: {
            placeholder: '这是一个Select',
            options: selectOptions,
          },
          colProps: colProps,
        },
        {
          field: 'field3',
          component: 'Cascader',
          componentProps: {
            placeholder: '这是一个级联菜单',
            options: cascaderOptions,
          },
          colProps: colProps,
        },
        {
          field: 'field4',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps,
        },
        {
          field: 'field5',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: colProps,
        },
      ],
      form: {},
      form2: {},
      form3: {},
      form4: {},
    }
  },
  methods: {

    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
