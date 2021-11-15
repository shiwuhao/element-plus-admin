<template>
  <page-wrapper :title="$route['meta']['title']" content-background content-full-height>
    <template #content>
      <span class="text-secondary">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</span>
    </template>
    <div class="p-5">
      <el-row justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="22" :xl="22">
          <el-steps :active="active" finish-status="success" process-status="process" align-center>
            <el-step v-for="(item,index) in steps"
                     :key="index"
                     :title="item.name"
                     :description="item.description"
            ></el-step>
          </el-steps>
        </el-col>
        <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="12">
          <div class="mt-5">
            <Step1 v-if="active === 0" @next="handleStepNext"/>
            <Step2 v-if="active === 1" @next="handleStepNext" @prev="handleStepPrev" :preview-info="previewInfo"/>
            <Step3 v-if="active === 2" @redo="handleRedo" :preview-info="previewInfo"/>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="notice" v-show="active === 0">
      <el-divider content-position="left">说明</el-divider>
      <div class="desc">
        <h4>转账到支付宝账户</h4>
        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
        <h4>转账到银行卡</h4>
        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
      </div>
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
      previewInfo: {},
      active: 0,
    })

    const componentId = computed(() => 'Step' + (state.active + 1))
    const methods = {
      handleStepNext: (form) => {
        state.active++;
        state.previewInfo = form;
      },
      handleStepPrev: () => {
        state.active--;
      },
      handleRedo: () => {
        state.active = 0;
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
.notice {
  padding-top: 30px;
  padding-bottom: 20px;

  .desc {
    padding: 0 30px;
    color: var(--el-text-color-regular);
    font-size: var(--el-font-size-base);
  }
}
</style>