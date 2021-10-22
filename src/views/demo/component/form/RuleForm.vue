<template>
  <PageWrapper
    :title="$route['meta']['title']"
    content-background
    content-full-height>
    <BasicForm class="p-2"
               ref="formRef"
               v-model="form"
               :schemas="schemas"
               @reset="handleReset"
               @submit="handleSubmit"
               size="small"
               auto-width
               label-width="150px"
               :label-position="getIsMobile ? 'top' : 'right'"></BasicForm>
  </PageWrapper>
</template>

<script>
import {getRuleFormData} from "@/views/demo/component/form/formData.js";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {BasicForm} from "@/components/Form";
import {PageWrapper} from '@/components/Page';
import {reactive, toRefs} from "vue";

export default {
  name: 'RuleForm',
  components: {BasicForm, PageWrapper},
  setup() {
    const {getIsMobile} = useRootSetting();
    const state = reactive({
      schemas: getRuleFormData(),
      form: {
        input: "",
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
    }
    const handleSubmit = () => {
    }

    return {
      ...toRefs(state),
      getIsMobile,
      handleReset,
      handleSubmit,
    }
  },
}
</script>
