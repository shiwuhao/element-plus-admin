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
               label-position="right"></BasicForm>
  </el-card>
</template>

<script>
import {getRuleFormData} from "@/views/component/form/formData";
import {BasicForm} from "@/components/Form";

export default {
  name: 'RuleForm',
  components: {BasicForm},
  data() {
    return {
      cardTitle: this.$route.meta.title,
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
    }
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
