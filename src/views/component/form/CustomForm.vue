<template>
  <el-card class="m10" :header="cardTitle">
    <BasicForm ref="formRef"
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
  </el-card>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {ElInput} from 'element-plus'
import {h} from "vue";

export default {
  name: 'RuleForm',
  components: {BasicForm},
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
              onInput: (e) => {
                console.log(e);
              },
            });
          }
        },
        {
          field: 'input2',
          label: '输入框',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
            slots: () => {
              // h()
            }
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
