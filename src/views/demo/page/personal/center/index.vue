<template>
  <div class="mx-2">
    <el-row :gutter="8">
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="18" class="mt-2">
        <el-card shadow="none">
          <el-tabs v-model="active">
            <el-tab-pane label="文章" name="article" :lazy="true">
              <Article/>
            </el-tab-pane>
            <el-tab-pane label="任务" name="task" :lazy="true">
              <Task/>
            </el-tab-pane>
            <el-tab-pane label="项目" name="project" :lazy="true">
              <Project/>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="6" class="mt-2">
        <UserInfo/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Article from "@/views/demo/page/personal/center/Article.vue";
import Task from "@/views/demo/page/personal/center/Task.vue";
import UserInfo from "@/views/demo/page/personal/center/UserInfo.vue";
import Project from "./Project.vue";
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