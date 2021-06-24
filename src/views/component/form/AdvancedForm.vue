<template>
  <el-card class="m10" :header="cardTitle">
    <BasicForm v-model="form"
               :schemas="schemas"
               showAdvancedButton
               size="small"
               label-width="150px"
               label-position="right"></BasicForm>
    {{ form }}
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
