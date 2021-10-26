<template>
  <div class="container flex-row center align-center">
    <el-form ref="loginForm" size="large" :model="form" :rules="rules" class="login-form m-3">
      <el-row>
        <el-col>
          <h3 class="title">{{ title }}</h3>
        </el-col>
        <el-col>
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="Username">
              <template #prefix>
                <i class="el-icon-user"></i>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item prop="username">
            <el-input v-model="form.password" placeholder="Password" show-password>
              <template #prefix>
                <i class="el-icon-lock"></i>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-button class="w-full" :loading="loading" type="primary" @click="login">
            Login
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {useStore} from 'vuex'
import {useRouter} from "vue-router";

export default {
  name: 'Login',
  setup() {
    const state = reactive({
      title: import.meta.env.VITE_TITLE,
      form: {username: 'admin', password: 'password'},
      rules: {
        username: [{required: true, trigger: 'blur'}],
        password: [{required: true, trigger: 'blur'}]
      },
      loading: false,
    });

    const {dispatch} = useStore();
    const {push, currentRoute} = useRouter();

    const login = async () => {
      try {
        const {access_token} = await dispatch('user/login', state.form);
        if (access_token) {
          const {query: {redirect, ...otherQuery}} = currentRoute.value;
          await push({path: redirect || '/', query: {...otherQuery}});
          state.loading = false;
        }
      } catch (e) {
        console.error(e);
        state.loading = false;
      }
    }

    return {
      ...toRefs(state),
      login,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background: #283443;

  .login-form {
    width: 520px;

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep(.el-input__inner) {
      background: transparent;
      border: 0;
      border-radius: 0;
      -webkit-appearance: none;
      color: white;
      caret-color: white;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px #283443 inset !important;
        -webkit-text-fill-color: white !important;
      }
    }
  }

  .title {
    font-size: 26px;
    color: white;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}
</style>
