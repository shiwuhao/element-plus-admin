<template>
  <PageWrapper :class=" getIsMobile ? 'mobile-workspace-header' : 'workspace-header'">
    <template #title>
      <div class="workspace-header-left">
        <el-avatar
          icon="el-icon-user-solid"
          :shape="shape"
          :size="size"
          :fit="fit"
          :src="url">
        </el-avatar>
        <div>

          <h3>早安，coco，开心每一天！</h3>
          <p>前端开发工程师-某某事业部-某某技术部</p>
        </div>
      </div>
    </template>
    <template #extra>
      <div class="workspace-header-divider">
        <Divider
          :direction="direction"
          v-for="(item,index) in headerRightData"
          :key="index"
        >
          <template #title>
            <p>{{ item.title }}</p>
            <p>{{ item.number }}</p>
          </template>
        </Divider>
      </div>
    </template>
  </PageWrapper>
</template>
<script>
import {defineComponent, reactive, ref, toRefs} from 'vue';
import {headerRightData} from "@/views/dashboard/workplace/data.js";
import {PageWrapper} from "@/components/Page";
import {Divider} from '@/components/Divider';
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";

export default defineComponent({
  components: {PageWrapper, Divider},
  setup() {
    const avatar = reactive({
      fit: 'fill',
      shape: 'circle',
      size: 70,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    })
    const {getIsMobile} = useRootSetting();
    return {
      ...toRefs(avatar),
      headerRightData,
      direction: ref('vertical'),
      getIsMobile
    }
  }
})
</script>
<style lang="scss" scoped>
.workspace-header,.mobile-workspace-header {
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

  .workspace-header-divider {
    @include flex;
    p {
      height: 5px;
      text-align: center;
      &:last-child {
        font-size: 24px;
        color: $color-text-black;
      }
    }
    ::v-deep .el-divider--vertical {
      height: 44px;
      margin-top: 12px;
    }
    ::v-deep .basic-divider {
      &:last-child {
        .el-divider--vertical {
          height: inherit;
        }
      }
    }
  }

  .el-avatar {
    margin-right: 20px;
  }

  .workspace-header-left {
    @include flex
  }
}
.mobile-workspace-header {
  ::v-deep .flex-row-justify {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>