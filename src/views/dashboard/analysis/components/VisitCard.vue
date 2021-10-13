<template>
  <div class="m10">
    <el-row :gutter="10">
      <el-col :span="24">
        <el-card shadow="none">
          <el-tabs v-model="activeName">
            <el-tab-pane label="销售额" name="first">
              <el-row>
                <el-col :span="16">
                  <div ref="elRef" style="height: 380px;width: 100%;"></div>
                </el-col>
                <el-col :span="8">
                  <span style="font-size: 18px;font-weight: bolder;">各大区排行</span>
                  <ul>
                    <li v-for="(item,index) in rankData" :key="index">
                      <span><i>{{ index + 1 }}</i>{{ item.title }}</span>
                      <span>{{ item.num }}</span>
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="访问量" name="second">
              <!--              <div ref="elRef1" style="height: 300px;width: 100%;"></div>-->
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useECharts} from "@/composables/useECharts";
import {getVisitData} from "@/views/dashboard/analysis/data";
import Sale from "@/views/dashboard/analysis/components/Sale";
import {BasicCard} from '@/components/Card'
import {rankingData} from '../data.js';

export default {
  name: "GrowCard",
  components: {BasicCard, Sale},
  setup() {
    const activeName = ref('first');
    const rankData = ref(rankingData());

    const {elRef, setOptions} = useECharts();

    onMounted(() => {
      setOptions(getVisitData())
    })

    return {
      elRef,
      activeName,
      rankData,
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;

  li {
    font-size: 14px;
    line-height: 30px;
    list-style: none;

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
</style>