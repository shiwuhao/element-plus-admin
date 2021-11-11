<template>
  <page-wrapper :title="$route['meta']['title']" content-background content-full-height>
    <template #content>
      <span class="text-secondary">表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</span>
    </template>
    <div class="p-2">
      <el-row justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="10">
          <el-form ref="formRef" :model="form"
                   :rules="rules"
                   label-width="120px"
                   :label-position="getIsMobile ? 'top' :'left'">
            <el-form-item label="Activity name" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone" prop="region">
              <el-select v-model="form.region" placeholder="Activity zone" class="w-full">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Activity time" required>
              <el-row>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date"
                                    class="w-full"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="2" style="text-align: center"> -</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker v-model="form.date2" placeholder="Pick a time" class="w-full"></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="Instant delivery" prop="delivery">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="Activity type" prop="type">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="Online activities" name="type"></el-checkbox>
                <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                <el-checkbox label="Offline activities" name="type"></el-checkbox>
                <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources" prop="resource">
              <el-radio-group v-model="form.resource">
                <el-radio label="Sponsorship"></el-radio>
                <el-radio label="Venue"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form" prop="desc">
              <el-input v-model="form.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">Create</el-button>
              <el-button @click="resetForm('form')">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </page-wrapper>
</template>

<script>
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {PageWrapper} from '@/components/Page';
import {reactive, ref, toRefs} from "vue";

export default {
  components: {PageWrapper},
  setup() {
    const formRef = ref(null);
    const {getIsMobile} = useRootSetting();
    const state = reactive({
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        resource: '',
        desc: '',
        delivery: '',
      },
      rules: {
        name: [
          {required: true, message: "Please input Activity name", trigger: "blur"},
          {min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur"},
        ],
        region: [{required: true, message: "Please select Activity zone", trigger: "change"}],
        date1: [{type: "date", required: true, message: "Please pick a date", trigger: "change"}],
        date2: [{type: "date", required: true, message: "Please pick a time", trigger: "change"}],
        type: [{type: "array", required: true, message: "Please select at least one activity type", trigger: "change"}],
        resource: [{required: true, message: "Please select activity resource", trigger: "change"}],
        desc: [{required: true, message: "Please input activity form", trigger: "blur"}],
      }
    })

    const methods = {
      submitForm: () => {
        formRef.value.validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm: () => {
        formRef.value.resetFields();
      },
    };
    return {
      ...toRefs(state),
      ...methods,
      getIsMobile,
      formRef
    };
  },
};
</script>
