<template>
  <PageWrapper
    :title="cardTitle"
    :sub-title="cardTitle"
    content-full-height>
    <el-card shadow="none">
      <BasicForm
        v-model="form"
        :schemas="schemas"
        @reset="handleReset"
        @submit="handleSubmit"
        size="small"
        label-width="150px"
        label-position="right"></BasicForm>
    </el-card>
  </PageWrapper>
</template>

<script>
import {getFormData} from "@/views/component/form/formData";
import {BasicForm} from "@/components/Form";
import PageWrapper from "@/components/Page/src/PageWrapper";

export default {
  name: 'Basic',
  components: {BasicForm, PageWrapper},
  data() {
    return {
      cardTitle: this.$route.meta.title,
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
    }
  },
  methods: {
    handleReset() {
      console.log('reset-1111')
    },
    handleSubmit() {
      console.log('submit-2222')
    },
  }
}
</script>
