<template>
  <el-row :gutter="20">
    <el-col :span="getIsMobile? 24:18">
      <BarChart ref="barChart"/>
    </el-col>
    <el-col :span="getIsMobile?24:6" class="right-access">
      <h3>门店{{title.text}}排名</h3>
      <ul>
        <li v-for="(item,index) in shopData" :key="index">
          <span><i>{{ index + 1 }}</i>{{ item.title }}</span>
          <span>{{ item.num }}</span>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, reactive} from 'vue';
import BarChart from '@/views/component/echarts/components/BarChart';
import {shopData} from '../data.js';
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
export default defineComponent({
  components: {BarChart},
  setup() {
    const {getIsMobile} = useRootSetting();
    return {
      shopData,
      title: reactive({
        text: '访问量'
      }),
      getIsMobile
    }
  }
})
</script>
<style lang="scss" scoped>
.right-access {
  ul {
    padding: 0;

    li {
      list-style: none;
      line-height: 42px;

      span {
        &:first-child {
          i {
            width: 20px;
            height: 20px;
            line-height: 20px;
            display: inline-block;
            background-color: #314659;
            border-radius: 50%;
            color: #fff;
            text-align: center;
            margin-right: 5px;
          }
        }

        &:last-child {
          float: right;
        }
      }
    }
  }
}
</style>