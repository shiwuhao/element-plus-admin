<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="10" :lg="7">
      <div class="user-wrap flex-row align-center">
        <el-avatar :size="80" :src="getUser.avatar" fit="fill"></el-avatar>
        <div class="userinfo">
          <div class="username">早安，{{ getUser.nickname }}</div>
          <div class="desc">今天天气不错，挺风和日丽的</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="{span:8,offset:4}" :md="{span:8,offset:6}" :lg="{span:6,offset:11}">
      <div class="task-wrap flex-row between align-center">
        <div class="task-item flex-col">
          <span class="label">待办</span>
          <span class="value">90</span>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="task-item flex-col">
          <span class="label">待办</span>
          <span class="value">66</span>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="task-item flex-col">
          <span class="label">待办</span>
          <span class="value">80</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {useUser} from "@/composables/useUser.js";

export default {
  name: "UserInfo",
  setup() {
    const {getUser} = useUser();

    return {
      getUser
    }
  },
}
</script>

<style lang="scss" scoped>
.user-wrap {
  .userinfo {
    padding-left: 10px;

    .username {
      font-size: 20px;
      padding: 10px 0;
      font-weight: bolder;
    }

    .desc {
      font-size: 14px;
      color: #909399;
    }
  }
}

.task-wrap {
  max-width: 350px;

  .task-item {
    padding: 15px 20px;

    .label {
      font-size: 14px;
      color: #606266;
    }

    .value {
      font-size: 22px;
    }
  }
}
</style>