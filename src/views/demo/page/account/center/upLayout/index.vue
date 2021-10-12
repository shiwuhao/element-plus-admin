<template>
  <div :class="prefixCls" class="m10">
    <el-header>
      <el-card :class="`${prefixCls}-left`">
        <div :class="`${prefixCls}-left-content`">
          <div>
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
          </div>
          <div :class="`${prefixCls}-left-introduce`">
            <p v-for="(item,index) in personalInfo" :key="index">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </p>
          </div>
        </div>

        <div :class="`${prefixCls}-left-tag`">
          <PageWrapper title="标签"/>
          <el-divider></el-divider>
          <Tag :dynamicTags="tags" :addTagVisible='addTagVisible' :closable="closable"/>

        </div>
        <div :class="`${prefixCls}-left-team`">
          <PageWrapper title="团队"/>
          <el-divider></el-divider>
          <Team :prefix="prefixCls"/>
        </div>
      </el-card>
    </el-header>
    <el-main>
      <el-card :class="`${prefixCls}-right`">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="item.name" :name="item.key" v-for="item in activeTab" :key="item.key">
            <div :class="`${prefixCls}-right-flex`">
              <component :is="item.component"/>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
  </div>
</template>
<script>
import {defineComponent, reactive, toRefs, ref} from 'vue';
import {Tag} from '@/components/Tag';
import {PageWrapper} from '@/components/Page';
import Team from './Team.vue';
import Article from './Article.vue'
import Application from './Application.vue';
import Project from './Project.vue';
import {personalInfo, activeTab} from './data.js';

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
      size: 70,
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
.el-header {
  height: auto;
}
.personal-center {
  ::v-deep .personal-center-article {
    &:first-child {
      margin-top: 15px;
    }
  }
  .personal-center-left {
    ::v-deep .el-card__body {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      justify-content: center;
    }

    .personal-center-left-content {
      display: flex;
      border-right: 1px dashed #e8eaec;
      padding: 0 10px;
      float: left;
      .personal-center-left-avatar {
        text-align: center;
        margin-top: 14px;
      }

      .personal-center-left-introduce {
        padding: 18px 58px;
        width: max-content;
        i {
          margin-right: 7px;
        }
      }

      .personal-center-left-text {
        text-align: center;
        margin-top: -15px;

        h3 {
          color: rgba(0, 0, 0, .85);
          font-weight: 500;
          font-size: 20px;
          height: 15px;
        }

        h4 {
          color: rgba(0, 0, 0, .85);
          font-size: 12px;
          font-weight: inherit;
          width: max-content
        }
      }
    }

    .personal-center-left-tag {
      border-right: 1px dashed #e8eaec;
      float: left;
      padding: 0 20px;
    }

    .personal-center-left-team {
      border-right: 1px dashed #e8eaec;
      border-right: none;
      padding: 0 10px;
    }
  }
}


::v-deep .page-wrapper .page-header {
  padding: 0;

  span {
    font-size: 14px;
  }
}
</style>