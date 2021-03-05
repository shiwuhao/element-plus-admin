<template>
  <div class="avatar flex-col-center">
    <el-dropdown class="right-item">
      <el-avatar :size="size" :src="circleUrl">武浩</el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        circleUrl: '',
        size: 35,
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('user/logout').then(() => {
          location.reload();
        })
      }
    }
  };
</script>
<style lang="scss" scoped>
  .avatar {
    width: 35px;
    height: 35px;
    cursor: pointer;

    .el-avatar {
      font-size: 12px;
      -webkit-transform: scale(0.85);
      background: #409EFF;
      font-weight: bolder;
    }
  }
</style>