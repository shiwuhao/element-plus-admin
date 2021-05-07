<template>
  <el-dropdown size="small" class="container">
    <div class="avatar flex-row-center">
      <el-avatar :size="30" :src="user.avatar">{{ user.display_name }}</el-avatar>
      <span class="name">{{ user.display_name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" divided @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout').then(() => {
        location.reload();
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  .avatar {
    cursor: pointer;
    font-size: 1.2em;

    .el-avatar {
      -webkit-transform: scale(0.85);
      background: #409EFF;
      font-weight: bolder;
    }

    .name {
      font-weight: bold;
      font-size: 12px;
      padding: 5px;
    }
  }
}
</style>