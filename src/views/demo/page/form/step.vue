<template>
  <div class="mx-2 m-6">
    <el-row>
      <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="10">
        <el-steps :active="step">
          <el-step v-for="item in stepList" :title="item.name" :description="item.description"></el-step>
        </el-steps>
        <el-form
          ref="ruleForms"
          :model="ruleForm"
          status-icon
          :rules="rules"
		  label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="Password" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Age" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
        </el-form>
        <el-row class="m-6">
          <el-button v-show="step!=1" @click="lastStep">上一步</el-button>
          <el-button v-if="step===stepList.length" @click="complete">完成</el-button>
		  <el-button @click="nextStep" v-else>下一步</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup(props) {
    const step = ref(1);
	const stepList=[{name:'step-1',description:'description1'},{name:'step-2',description:'description2'},{name:'step-3',description:'description3'}]
    const ruleForm = reactive({
      pass: "",
      checkPass: "",
      age: "",
    });
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the age"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please input digits"));
        } else {
          if (value < 18) {
            callback(new Error("Age must be greater than 18"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: "blur" }],
      checkPass: [{ validator: validatePass2, trigger: "blur" }],
      age: [{ validator: checkAge, trigger: "blur" }],
    });
    let ruleForms = ref(null);
    const methods = {
      submitForm(formName) {
        ruleForms.value.validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
    };
    return {
      step,
	  stepList,
      ruleForm,
      rules,
      ...methods,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>