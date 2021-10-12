<template>
  <el-row :gutter="20">
    <el-col v-for="(item,ind) in applicationList" :key="ind" :span="getIsMobile?24:6">
      <Card shadow="hover" :header="header">
        <template #text-custom>
          <div class="card-application">
            <div class="card-application-top">
              <el-avatar :src="item.url" size="small" class="card-application-icon"></el-avatar>
              <span class="card-application-title">{{ item.title }}</span>
            </div>
            <div class="card-application-main">
              <p>
                <span>活跃用户</span>
                <span>{{ item.active }}<span style="color: #000000d9;font-size: 14px;font-weight: 400">万</span></span>
              </p>
              <p>
                <span>新增用户</span>
                <span>{{ item.new }}</span>
              </p>
            </div>
            <div class="card-application-divider">
              <Divider
                direction="vertical"
                :iconName="item.icon"
                :disabled='disabled'
                :tipContent="item.text"
                :color="item.color"
                v-for="(item,ind) in applicationActions" :key="ind"
              />
              <el-dropdown>
            <span class="el-dropdown-link">
                <i class="el-icon-more-outline"></i>
            </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-plus">1st menu item</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">2nd menu item</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">3ird item</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </template>
      </Card>
    </el-col>
  </el-row>

</template>
<script>
import {defineComponent, ref} from 'vue';
import {Card} from '@/components/Card';
import {applicationList, applicationActions} from './data.js';
import {Divider} from '@/components/Divider';
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
export default defineComponent({
  components: {Card, Divider},
  setup() {
    const {getIsMobile} = useRootSetting();
    return {
      disabled: ref(false),
      applicationList,
      applicationActions,
      getIsMobile,
      header: ref(false)
    }
  }
})
</script>
<style lang="scss" scoped>
.card-application {
  @include middleWay;

  .card-application-divider {
    @include flex($justify-content: center);
    border-top: 1px solid $color-border-solid;
    padding: 10px 0;
    box-sizing: border-box;
    overflow: auto;
    :deep(.el-dropdown) {
      padding: 0 23px;
    }
    :deep(.basic-divider) {
      .divider-content {
        padding: 0 20px;
      }
      &:last-child {
        padding-right: 0;
        .el-divider--vertical {
          width: inherit;
        }
      }
    }
  }

  .card-application-top {
    @include middleWay($text-align: left);
    margin: 12px 0 0px 23px;

    .card-application-icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .card-application-title {
      @include title($font-size: 16px);
      @include singleLine;
      @include middleWay($vertical-align: super);
    }
  }

  .card-application-main {
    width: 100%;
    @include flex($justify-content: space-between);
    padding: 0 57px;
    box-sizing: border-box;
    @include middleWay;

    p {
      display: grid;

      span {
        &:first-child {
          margin-bottom: 5px;
          @include description($font-size: 12px,$height: 20px)
        }
        &:last-child {
          @include title($font-size: 22px)
        }
      }
    }
  }
}
</style>