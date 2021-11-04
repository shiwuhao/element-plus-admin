<template>
  <div class="container">
    <el-dropdown size="small" trigger="click">
      <div class="avatar flex-row align-center">
        <el-avatar :size="30" :src="getUser['avatar']">{{ getUser['nickname'] }}</el-avatar>
        <span class="name">
          {{ getUser['nickname'] }}<icon-svg name="el-down" class="ml-1" :size="12"/>
        </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <icon-svg name="el-user" :size="14" class="mr-1"/>
            个人中心
          </el-dropdown-item>
          <el-dropdown-item>
            <icon-svg name="el-setting" :size="14" class="mr-1"/>
            个人设置
          </el-dropdown-item>
          <el-dropdown-item divided @click="logout">
            <icon-svg name="el-logout" :size="14" class="mr-1"/>
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
import {useUser} from "@/composables/useUser";
import {useStore} from "vuex";

export default {
  setup() {
    const {getUser} = useUser();
    const {dispatch} = useStore()

    const logout = async () => {
      await dispatch('user/logout');
      location.reload();
    }
    return {
      getUser,
      logout
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  .avatar {
    height: 49px;

    .name {
      color: var(--el-text-color-primary);
      padding-left: 5px;
      width: max-content;
    }

    .el-avatar {
      -webkit-transform: scale(0.85);
      background: #409EFF;
      font-weight: bolder;
    }
  }
}
</style>