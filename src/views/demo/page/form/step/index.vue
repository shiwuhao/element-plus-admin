<template>
  <page-wrapper :title="$route['meta']['title']" content-background content-full-height>
    <template #content>
      <span class="text-secondary">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</span>
    </template>
    <div class="p-5">
      <el-row justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="22" :xl="22">
          <el-steps :active="active" finish-status="success" align-center>
            <el-step v-for="(item,index) in steps"
                     :key="index"
                     :title="item.name"
                     :status="item.status"
                     :description="item.description"
            ></el-step>
          </el-steps>
        </el-col>
        <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="12">
          <div class="mt-5">
            {{ active }} {{active === 0}}
            <Step1 v-show="active === 0" @next="handleStepNext"/>
            <Step2 v-show="false" @next="handleStepNext" :preview-info="step2Info"/>
            <Step3 v-show="active === 2" @next="handleStepNext"/>
          </div>
          <!--          <el-row class="m-6" style="justify-content: center">-->
          <!--            <el-button type="primary" v-show="active!==0" @click="nextStep(-1)">上一步</el-button>-->
          <!--            <el-button type="primary" v-if="active===steps.length" @click="completeStep">完成</el-button>-->
          <!--            <el-button type="primary" @click="nextStep(1)" v-else>下一步</el-button>-->
          <!--          </el-row>-->
        </el-col>
      </el-row>
    </div>
  </page-wrapper>
</template>

<script>
import {useRootSetting} from "@/composables/setting/useRootSeeting";
import {PageWrapper} from '@/components/Page';
import {computed, reactive, ref, toRefs} from "vue";
import Step1 from "@/views/demo/page/form/step/Step1";
import Step2 from "@/views/demo/page/form/step/Step2";
import Step3 from "@/views/demo/page/form/step/Step3";

export default {
  components: {PageWrapper, Step1, Step2, Step3},
  setup(props) {
    const state = reactive({
      steps: [
        {name: '填写信息', description: '', status: 'wait'},
        {name: '确认信息', description: '', status: 'wait'},
        {name: '完成', description: '', status: 'wait'},
      ],
      step2Info: {},
      active: 0,
    })

    const componentId = computed(() => 'Step' + (state.active + 1))
    const methods = {
      handleStepNext: (form) => {
        state.active++;
        state.step2Info = form;
      },
      handleStepPrev: () => {
        state.active--;
      },
      completeStep: () => {

      }
    }

    return {
      ...toRefs(state),
      ...methods,
      componentId,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>