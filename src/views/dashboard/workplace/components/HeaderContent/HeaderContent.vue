<template>
  <PageWrapper class="workspace-header">
    <template #title>
      <h2>工作台</h2>
      <el-row>
        <el-col :span="6">
          <el-avatar
            icon="el-icon-user-solid"
            :shape="shape"
            :size="size"
            :fit="fit"
            :src="url">
          </el-avatar>
        </el-col>
        <el-col :span="18">
          <h3>早安，coco，开心每一天！</h3>
          <p>前端开发工程师-某某事业部-某某技术部</p>
        </el-col>
      </el-row>
    </template>
    <template #extra>
      <Divider direction="vertical">

      </Divider>
    </template>
  </PageWrapper>
</template>
<script>
import {defineComponent, reactive, ref, toRefs} from 'vue';
import {PageWrapper} from "@/components/Page";
import {Divider} from '@/components/Divider';
export default defineComponent({
  components: {PageWrapper,Divider},
  setup() {
    const avatar = reactive({
      fit: 'fill',
      shape: 'circle',
      size: 70,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    })
    return {
      ...toRefs(avatar)
    }
  }
})
</script>
<style lang="scss" scoped>
.workspace-header {
  h3 {
    font-size: $font-size-middle;
  }
  p {
    font-size: $font-size-small;
    color: $color-text-gray;
  }
  h2 {
    font-size: $font-size-middle;
  }
}
</style>