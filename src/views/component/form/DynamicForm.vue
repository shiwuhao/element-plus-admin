<template>
  <el-card class="m10" :header="cardTitle">
    <div style="padding-bottom: 30px;">
      <el-button size="mini" @click="changFieldLabel(0)">更改字段1Label</el-button>
      <el-button size="mini" @click="changFieldValue(0)">更改字段1Value</el-button>
      <el-button size="mini" @click="appendSchema">向最后追加一个字段</el-button>
      <el-button size="mini" @click="deleteLastSchema">删除最后一个字段</el-button>
      <el-button size="mini">更改字段1Label</el-button>
    </div>
    <BasicForm v-model="form"
               :schemas="schemas"
               @reset="handleReset"
               @submit="handleSubmit"
               size="small"
               label-width="150px"
               label-position="right"></BasicForm>
  </el-card>
</template>

<script>
import {getDynamicFormData} from "@/views/component/form/formData";
import {BasicForm} from "@/components/Form";

export default {
  name: 'DynamicForm',
  components: {BasicForm},
  data() {
    return {
      cardTitle: this.$route.meta.title,
      schemas: getDynamicFormData(),

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
    changFieldLabel(index) {
      this.schemas[index]['label'] = 'Label';
    },
    changFieldValue(index) {
      const field = this.schemas[index]['field'];
      this.form[field] = 'newValue'
    },
    appendSchema() {
      const schema = {
        field: 'newField',
        label: '新字段',
        component: 'Input',
        colProps: {
          span: 8,
        }
      }
      this.schemas.push(schema);
    },
    deleteLastSchema() {
      this.schemas.splice(this.schemas.length-1, 1);
    },
    handleReset() {
      console.log('reset-1111')
    },
    handleSubmit() {
      console.log('submit-2222')
    },
  }
}
</script>
