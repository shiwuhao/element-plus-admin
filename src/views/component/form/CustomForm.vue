<template>
  <PageWrapper
    :title="cardTitle"
    :sub-title="cardTitle"
    content-background
    content-full-height>
    <BasicForm class="p16"
               ref="formRef"
               v-model="form"
               :schemas="schemas"
               @reset="handleReset"
               @submit="handleSubmit"
               size="small"
               auto-width
               label-width="150px"
               label-position="right">
      <template #custom>
        <el-input v-model="form.input3" placeholder="自定义Slot"></el-input>
      </template>
    </BasicForm>
  </PageWrapper>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {ElInput} from 'element-plus'
import {PageWrapper} from '@/components/Page';

export default {
  name: 'CustomForm',
  components: {BasicForm, PageWrapper},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      schemas: [
        {
          field: 'input1',
          label: 'render方式',
          component: 'Input',
          colProps: {
            span: 8
          },
          render: (h, modelValue) => {
            return h(ElInput, {
              placeholder: '请输入',
              type: 'text',
              onInput: (e) => {
                console.log(e);
              },
            }, {prepend: () => 'http://'});
          }
        },
        {
          field: 'input2',
          label: '输入框',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: {
            span: 8
          }
        },
        {
          field: 'input3',
          label: '自定义Slot',
          slot: 'custom',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
          colProps: {
            span: 8
          }
        },
      ],

      form: {
        input1: "value1",
        input2: "value2",
        input3: "value3",
      },
    }
  },
  mounted() {
    setTimeout(() => {
      this.form.input1 = 2222222;
    }, 2000)
  },
  methods: {
    handleReset() {
      this.$refs['formRef'].resetFields();
    },
    handleSubmit() {
      this.$refs['formRef'].validate((e) => {
        console.log('e', e);
      })
    },
  }
}
</script>
