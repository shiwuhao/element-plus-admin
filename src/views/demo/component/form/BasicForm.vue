<template>
  <PageWrapper
    :title="$route['meta']['title']"
    content-full-height>
    <el-card shadow="none">
      <BasicForm
        v-model="form"
        :schemas="schemas"
        @reset="handleReset"
        @submit="handleSubmit"
        label-width="150px"
        :label-position="getIsMobile ? 'top' : 'right'"></BasicForm>
    </el-card>
  </PageWrapper>
</template>

<script>
import {getFormData} from "@/views/demo/component/form/formData.js";
import {BasicForm} from "@/components/Form";
import {PageWrapper} from '@/components/Page';
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {reactive, ref, toRefs} from "vue";

export default {
  name: 'Basic',
  components: {BasicForm, PageWrapper},
  setup() {
    const formRef = ref();
    const {getIsMobile} = useRootSetting();
    const state = reactive({
      schemas: getFormData(),
      form: {
        input: "wqewqfdas",
        input_number: 12321,
        select: "value1",
        time_picker: "16:40:33",
        date_picker: "2021-06-18",
        cascader: ["value2", "value1"],
        slider: 17,
        radio_group: "value2",
        checkbox_group: ["value1", "value2"],
        checkbox_button_group: ["value1"],
        radio_button_group: "value2",
        date_time_picker: "2021-06-17 00:00:00",
        time_select: "11:00"
      },
    });


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
