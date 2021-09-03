<template>
  <div :class="prefixCls">
    <el-row :gutter="20">
      <el-col :lg="6" :xs="24">
        <el-card :class="`${prefixCls}-left`">
          <div :class="`${prefixCls}-left-content`">
            <div :class="`${prefixCls}-left-avatar`">
              <el-avatar
                icon="el-icon-user-solid"
                :shape="shape"
                :size="size"
                :fit="fit"
                :src="url">
              </el-avatar>
            </div>
            <div :class="`${prefixCls}-left-text`">
              <h3>CoCo</h3>
              <h4>海纳百川，有容乃大</h4>
            </div>
            <div :class="`${prefixCls}-left-introduce`">
              <p v-for="(item,index) in personalInfo" :key="index">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </p>
            </div>
          </div>
          <el-divider></el-divider>
          <PageWrapper title="标签"/>
          <Tag :dynamicTags="tags" :addTagVisible='addTagVisible' :closable="closable"/>
          <el-divider></el-divider>
          <PageWrapper title="团队"/>
          <Team />
        </el-card>
      </el-col>
      <el-col :lg="18" :xs="24">
        <el-card :class="`${prefixCls}-right`">
          <el-tabs v-model="activeName">
            <el-tab-pane :label="item.name" :name="item.key" v-for="item in activeTab" :key="item.key">
              <div :class="`${prefixCls}-right-flex`">
                <component :is="item.component"/>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent, reactive, toRefs, ref} from 'vue';
import {Tag} from '@/components/Tag';
import {PageWrapper} from '@/components/Page';
import Team from './team';
import Article from './article'
import Application from './application';
import Project from './project';
import {personalInfo, activeTab} from './data';

export default defineComponent({
  name: "PersonalCenter",
  components: {
    Tag,
    PageWrapper,
    Team,
    Article,
    Application,
    Project
  },
  setup() {
    const tags = ref(['标签一', '标签二', '标签三'])
    const addTagVisible = ref(true)
    const closable = ref(true)
    const activeName = ref('1')
    const avatar = reactive({
      fit: 'fill',
      shape: 'circle',
      size: 100,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    })
    return {
      prefixCls: 'personal-center',
      tags,
      closable,
      addTagVisible,
      activeName,
      personalInfo,
      activeTab,
      ...toRefs(avatar)
    }
  }
})
</script>
<style lang="scss" scoped>
.personal-center {
  margin: 20px;

  ::v-deep .personal-center-article {
    &:first-child {
      margin-top: 15px;
    }
  }
  .personal-center-left {
    margin-bottom: 10px;

    .personal-center-left-content {
      .personal-center-left-avatar {
        @include middleWay
      }

      .personal-center-left-introduce {
        padding-left: 24px;

        i {
          margin-right: 7px;
        }
      }

      .personal-center-left-text {
        @include middleWay;
        margin-bottom: 28px;

        h3 {
          @include title($height: 15px)
        }

        h4 {
          @include description($color: $color-text-black)
        }
      }
    }
  }
  .personal-center-right-flex {
    @include flex($wrap: wrap)
  }
}

.el-divider--horizontal {
  background: 0 0;
  border-top: 1px dashed $color-border-dashed;
}

::v-deep .page-wrapper .page-header {
  padding: 0;

  span {
    font-size: $font-size-small;
  }
}
</style>