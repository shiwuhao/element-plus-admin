<template>
  <el-row :gutter="10" class="mb10">
    <el-col :span="24">
      <el-card shadow="none">
        <el-tabs v-model="activeName">
          <el-tab-pane label="销售额" name="first">
            <Sale/>
          </el-tab-pane>
          <el-tab-pane label="访问量" name="second">
            <Sale/>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {ref} from "vue";
import Sale from "@/views/dashboard/analysis/components/Sale";

export default {
  name: "VisitCard",
  components: {Sale},
  setup() {
    const activeName = ref('first');
    return {
      activeName,
    }
  }
}
</script>