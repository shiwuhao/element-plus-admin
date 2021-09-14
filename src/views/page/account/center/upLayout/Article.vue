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
            <time class="article-time">{{ item.time}}</time>
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
import {articleList,articleAction} from './data';
import {defineComponent} from 'vue';
import {PageWrapper} from '@/components/Page';
import {Tag} from '@/components/Tag';
import {Divider} from '@/components/Divider';
export default defineComponent({
  name: 'article-page',
  components: {PageWrapper,Tag,Divider},
  setup() {
    return {
      articleList,
      articleAction
    }
  }
})
</script>
<style scoped lang="scss">
::v-deep.page-wrapper .page-header-content:not(:empty) {
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
    ::v-deep .el-divider--horizontal {
      margin: 12px 0;
    }
    ::v-deep .divider-content {
      display: none;
    }
  }
  .page-wrapper {
    margin-top: 2px;
  }
  .divider-wrap {
    display: flex;
    align-items: center;
    margin-left: -24px;
    ::v-deep .divider-iconName {
      margin-right: 5px;
    }
  }
  .article-main {
    padding-top: 12px;

    .article-icon {
      font-size: 18px;
      vertical-align: text-top;
      margin-right: 5px;
    }

    .article-title, .article-link {
      //color: #1890ff
      color: $color-text-blue
    }

    .article-link {
      text-decoration: none;
      margin-left: 5px;
    }

    .article-word, .article-time {
      color: rgba(0, 0, 0, .25);
    }

    .article-time {
      margin-left: 15px;
      vertical-align: middle;
    }
  }
}
</style>