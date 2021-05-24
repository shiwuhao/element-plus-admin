<template>
  <div>
    <el-row :gutter="10">
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          width:{{width}}<br>
          height:{{height}}<br>
          getIsMobile:{{getIsMobile}}
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="12" :xl="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card style="margin-top: 20px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="日统计" name="first">
          日统计
        </el-tab-pane>
        <el-tab-pane label="月统计" name="second">月统计</el-tab-pane>
        <el-tab-pane label="年统计" name="second">年统计</el-tab-pane>
        <el-tab-pane label="实时电销" name="third">实时电销</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>


  import {useWindowSize} from "@vueuse/core";
  import {useRootSetting} from "@/hooks/setting/useRootSeeting";

  export default {
    name: 'Home',
    data() {
      return {
        activeName: 'first'
      };
    },
    setup(){
      const {width,height} = useWindowSize();
      const {getIsMobile} =useRootSetting();
      return {width,height,getIsMobile}
    }
  }
</script>
