<template>
  <PageWrapper
    :title="$route['meta']['title']"
    content-background
    content-full-height>
    <BasicForm class="p-4"
               ref="formRef"
               v-model="form"
               :schemas="schemas"
               @reset="handleReset"
               @submit="handleSubmit"
               size="small"
               auto-width
               label-width="150px"
               :label-position="getIsMobile ? 'top' : 'right'">
      <template #custom>
        <el-input v-model="form.input3" placeholder="自定义Slot"></el-input>
      </template>
    </BasicForm>
  </PageWrapper>
</template>

<script>
import {BasicForm} from "@/components/Form";
import {ElInput} from 'element-plus';
import {PageWrapper} from '@/components/Page';
import {reactive, ref, toRefs} from "vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting";

export default {
  name: 'CustomForm',
  components: {BasicForm, PageWrapper},
  setup() {
    const formRef = ref();
    const {getIsMobile} = useRootSetting();
    const state = reactive({
      schemas: [
        {
          field: 'input1',
          label: 'render方式',
          component: 'Input',
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
        },
        {
          field: 'input3',
          label: '自定义Slot',
          slot: 'custom',
          component: 'Input',
          componentProps: {
            placeholder: '这是一个Input表单',
          },
        },
      ],
      form: {
        input1: "value1",
        input2: "value2",
        input3: "value3",
      },
    })

    const handleReset = () => {
      formRef.value.resetFields();
    };
    const handleSubmit = () => {
      formRef.value.validate((e) => {
        console.log('e', e);
      });
    };

    return {
      ...toRefs(state),
      formRef,
      getIsMobile,
      handleReset,
      handleSubmit
    }
  },
}
</script>
