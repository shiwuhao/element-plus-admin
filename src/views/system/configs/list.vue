<template>
  <el-card title="系统配置">
    <template #header>
      <div>{{ cardTitle}}</div>
    </template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <el-row>
          <el-col :span="12">
            <BasicForm label :options="options"></BasicForm>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
  import {BasicForm} from "@/components/Form";
  export default {
    name: "list",
    components: {BasicForm},
    data() {
      return {
        cardTitle: this.$route.meta.title,
        activeName: 'second',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>