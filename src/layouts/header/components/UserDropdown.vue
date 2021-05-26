<template>
  <div class="container">
    <el-dropdown size="small" trigger="click">
      <div :class="theme" class="avatar flex-row-center">
        <el-avatar :size="30" :src="getUser.avatar">{{ getUser.display_name }}</el-avatar>
        <span class="name" style="width: max-content">{{ getUser.display_name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" divided @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  props: ['theme'],
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout');
      location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  .avatar {
    font-size: 12px;
    height: 49px;
    padding: 0 10px;

    .name {
      color: #303133;
      padding-left: 5px;
    }

    .el-avatar {
      -webkit-transform: scale(0.85);
      background: #409EFF;
      font-weight: bolder;
    }
  }
}
</style>