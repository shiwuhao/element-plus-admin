<template>
  <PageWrapper :title="$route['meta']['title']">
    <el-card shadow="none" class="mb-2">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="3" class="my-1">
          <el-button size="mini" @click="changFieldLabel(0)" class="w-full">更改字段1Label</el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="3" class="my-1">
          <el-button size="mini" @click="changFieldValue('input')" class="w-full">更改字段1Value</el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="3" class="my-1">
          <el-button size="mini" @click="appendSchema" class="w-full">向最后追加一个字段</el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="3" class="my-1">
          <el-button size="mini" @click="deleteLastSchema" class="w-full">删除最后一个字段</el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="3" class="my-1">
          <el-button size="mini" @click="autoWidth=!autoWidth" class="w-full">自动宽度{{ autoWidth }}</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="none">
      <BasicForm class="m-2"
                 ref="formRef"
                 v-model="form"
                 :schemas="schemas"
                 @reset="handleReset"
                 @submit="handleSubmit"
                 :auto-width="autoWidth"
                 label-width="90px"
                 label-position="right">
      </BasicForm>
    </el-card>
  </PageWrapper>
</template>

<script>
import {getDynamicFormData} from "@/views/demo/component/form/formData.js";
import {BasicForm} from "@/components/Form";
import {PageWrapper} from '@/components/Page';
import {reactive, ref, toRefs} from "vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {ElInput} from "element-plus";

export default {
  name: 'DynamicForm',
  components: {BasicForm, PageWrapper},
  setup() {
    const formRef = ref();
    const {getIsMobile} = useRootSetting();
    const state = reactive({
      schemas: getDynamicFormData(),
      autoWidth: false,
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
    })

    const handleReset = () => {
      formRef.value.resetFields();
    };
    const handleSubmit = () => {
      formRef.value.validate((e) => {
        console.log('e', e);
      });
    };

    const changFieldLabel = (index) => state.schemas[index]['label'] = 'Label';
    const changFieldValue = (field) => state.form[field] = 'newValue';
    const appendSchema = () => state.schemas.push({field: 'newField', label: '新字段', component: 'Input'});
    const deleteLastSchema = () => state.schemas.splice(state.schemas.length - 1, 1);

    return {
      ...toRefs(state),
      formRef,
      getIsMobile,
      handleReset,
      handleSubmit,
      changFieldLabel,
      changFieldValue,
      appendSchema,
      deleteLastSchema,
    }
  },
}
</script>
