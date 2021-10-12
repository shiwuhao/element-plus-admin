<template>
  <div v-for="(item,index) in articleList" :key="index" class="personal-center-article">
    <PageWrapper :title="item.title"/>
    <Tag :dynamicTags="item.description"/>
    <PageWrapper>
      <template #content>
        {{ item.content }}
        <div class="article-main">
          <i :class="item.icon" class="article-icon"></i>
          <span class="article-title">
            {{ item.user }}
            <span class="article-word">发布在</span>
            <a :href="item.url" class="article-link">{{ item.url }}</a>
            <time :class="getIsMobile?'mobile-article-time':'article-time'">{{ item.time}}</time>
          </span>
        </div>
      </template>
      <div class="divider-wrap">
        <Divider
          :icon-name="item.icon"
          direction="vertical"
          :title="item.text"
          :color="item.color"
          v-for="(item,index) in articleAction" :key="index"
        />
      </div>
    </PageWrapper>
    <Divider class="divider-empty"/>
  </div>
</template>
<script>
import {articleList,articleAction} from './data.js';
import {defineComponent} from 'vue';
import {PageWrapper} from '@/components/Page';
import {Tag} from '@/components/Tag';
import {Divider} from '@/components/Divider';
import {useRootSetting} from "@/composables/setting/useRootSeeting.js";
export default defineComponent({
  name: 'article-page',
  components: {PageWrapper,Tag,Divider},
  setup() {
    const {getIsMobile} = useRootSetting();
    return {
      articleList,
      articleAction,
      getIsMobile
    }
  }
})
</script>
<style scoped lang="scss">
:deep(.page-wrapper .page-header-content:not(:empty)){
  padding-top: 0;
}
.personal-center-article {
  width: 96%;
  margin: 0 auto;
  &:last-child {
    .divider-empty {
      display: none;
    }
  }
  .divider-empty{
    :deep(.el-divider--horizontal) {
      margin: 12px 0;
    }
    :deep(.divider-content) {
      display: none;
    }
  }
  .page-wrapper {
    margin-top: 2px;
  }
  .divider-wrap {
    @include flex;
    margin-left: -24px;
    :deep(.divider-iconName) {
      margin-right: 5px;
    }
  }
  .article-main {
    padding-top: 12px;

    .article-icon {
      font-size: 18px;
      @include middleWay($vertical-align: text-top);
      margin-right: 5px;
    }

    .article-title, .article-link {
      color: $color-text-blue;
    }

    .article-link {
      text-decoration: none;
      margin-left: 5px;
    }

    .article-word, .article-time,.mobile-article-time {
      color: $color-text-gray;
    }

    .article-time{
      margin-left: 15px;
      @include middleWay;
    }
    .mobile-article-time {
      display: inline-block;
      margin: 7px 0 0 24px;
    }
  }
}
</style>