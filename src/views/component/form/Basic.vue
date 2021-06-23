<template>
  <el-card class="m10" :header="cardTitle">
    <BasicForm v-model="form" :schemas="schemas" size="small" label-width="150px" label-position="right"></BasicForm>
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

    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
