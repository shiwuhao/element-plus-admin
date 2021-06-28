<template>
  <el-card class="m10" header="基础收缩示例">
    <BasicForm v-model="form"
               :schemas="schemas"
               :action-props="actionProps"
               size="small"
               label-width="150px"
               label-position="right"></BasicForm>
  </el-card>
  <el-card class="m10" header="超过二行收起">
    <BasicForm v-model="form"
               :schemas="schemas"
               :action-props="actionProps2"
               size="small"
               label-width="150px"
               label-position="right"></BasicForm>
  </el-card>
  <el-card class="m10" header="动作按钮单独一行">
    <BasicForm v-model="form"
               :schemas="schemas"
               :action-props="actionProps3"
               size="small"
               label-width="150px"
               label-position="right"></BasicForm>
  </el-card>
</template>

<script>
import {getFormData} from "@/views/component/form/formData";
import {BasicForm} from "@/components/Form";

export default {
  name: 'Basic',
  components: {BasicForm},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      actionProps: {
        colProps: {
          span: 6
        },
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
        colProps: {
          span: 6
        },
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
        showAdvancedLength: 2,
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
          colProps: {
            span: 8
          }
        },
        {
          field: 'field2',
          label: 'field2',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: {
            span: 8
          }
        },
        {
          field: 'field3',
          label: 'field3',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: {
            span: 8
          }
        },
        {
          field: 'field4',
          label: 'field4',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: {
            span: 8
          }
        },
        {
          field: 'field5',
          label: 'field5',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: {
            span: 8
          }
        },
      ],
      form: {},
    }
  },
  methods: {

    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
