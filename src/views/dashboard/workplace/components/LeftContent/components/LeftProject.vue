<template>
  <Card
    :cardName="cardName"
    :headerType="headerType"
    :btnName="btnName"
  >
    <template #text-custom>
      <el-row :gutter="5">
        <el-col v-for="(item,index) in leftTopData" :key="index" :span="getIsMobile?24:8">
          <Card
            :imageCard="imageCard"
            :shadow="shadow"
            :title="item.title"
            :time="item.time"
            :description="item.content"
            :imageUrl="item.url"
            :header="header"
          >
            <template #image-custom>
              <span>{{ item.name }}</span>
            </template>
          </Card>
        </el-col>
      </el-row>
    </template>
  </Card>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {Card} from "@/components/Card";
import {leftTopData} from "@/views/dashboard/workplace/data";
import {useRootSetting} from "@/composables/setting/useRootSeeting";

export default defineComponent({
  components: {Card},
  setup() {
    const {getIsMobile} = useRootSetting();
    return {
      cardName: ref('进行中的项目'),
      headerType: ref('btn'),
      btnName: ref('全部项目'),
      leftTopData,
      shadow: ref('hover'),
      imageCard: ref(true),
      getIsMobile,
      header: ref(false)
    }
  }
})
</script>
<style lang="scss" scoped>
::v-deep .common-card {
  .application-image-card {
    position: relative;

    .image {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      top: 12px;
      left: 13px;
    }
    .project-card-title {
      margin-left: 32px;
    }
    .bottom {
      span {
        font-size: $font-size-small;
        color: $color-text-gray;
      }
    }
  }
}

</style>