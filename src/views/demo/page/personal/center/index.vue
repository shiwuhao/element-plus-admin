<template>

  <el-row>
    <el-col :span="16">
      <el-card shadow="none" class="m-2">
        <el-tabs v-model="active">
          <el-tab-pane label="文章" name="article" :lazy="true">
            <Article/>
          </el-tab-pane>
          <el-tab-pane label="任务" name="task" :lazy="true">
            <Task />
          </el-tab-pane>
          <el-tab-pane label="项目" name="project" :lazy="true">
            <Project/>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
    <el-col :span="8">
      <UserInfo class="mt-2"/>
    </el-col>
  </el-row>
</template>

<script>
import Article from "@/views/demo/page/personal/center/Article";
import Task from "@/views/demo/page/personal/center/Task";
import UserInfo from "@/views/demo/page/personal/center/UserInfo";
import Project from "./Project";
import {ref} from "vue";

export default {
  name: "index",
  components: {Article, UserInfo, Project, Task},
  setup() {
    const active = ref('article');
    return {
      active
    }
  }
}
</script>

<style scoped>

</style>