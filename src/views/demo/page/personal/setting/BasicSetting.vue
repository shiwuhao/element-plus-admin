<template>
  <el-form :model="form" :label-position="getIsMobile ? 'top' :  'right'" label-width="80px">
    <el-row :gutter="10">
      <el-col :sm="24" :xs="24" :md="18" :lg="16" :xl="14">
        <el-row>
          <el-col>
            <el-form-item label="用户名">
              <el-input v-model="form.username" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="邮箱">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="昵称">
              <el-input v-model="form.nickname"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="个人简介">
              <el-input v-model="form.desc" type="textarea"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="6" :lg="8" :xl="10">
        <div class="flex-row center">
          <div class="flex-col center">
            <el-avatar :src="form.avatar" :size="130"></el-avatar>
            <div class="mt-5">
              <el-button type="primary" class="w-full">更换头像</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import {BasicForm} from '@/components/Form'
import {reactive, ref, toRefs} from "vue";
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {useUser} from "@/composables/useUser";

export default {
  name: "BasicSetting",
  components: {BasicForm},
  setup() {
    const {getUser} = useUser();
    const state = reactive({
      form: getUser,
      rules: [],
    })

    const {getIsMobile} = useRootSetting();

    return {
      ...toRefs(state),
      getIsMobile
    }
  },
}
</script>