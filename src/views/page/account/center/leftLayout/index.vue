<template>
  <div :class="prefixCls">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card :class="`${prefixCls}-left`">
          <el-avatar icon="el-icon-user-solid" :shape="shape" :size="size" :fit="fit" :src="url">
            <span>CoCo</span>
            <span>海纳百川，有容乃大</span>
          </el-avatar>
          <div :class="`${prefixCls}-left-introduce`">
            <p>
              <i class="el-icon-edit"></i>
              <span>交互专家</span></p>
            <p>
              <i class="el-icon-edit"></i>
              <span>某某某事业部</span></p>
            <p>
              <i class="el-icon-edit"></i>
              <span>北京市</span></p>
          </div>
          <el-divider></el-divider>
          <CenterTitle>
            <template #title>
              标签
            </template>
          </CenterTitle>
          <Tag :dynamicTags="tags" :addTagVisible='addTagVisible' :closable="closable"/>
          <el-divider></el-divider>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card :class="`${prefixCls}-right`">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文章（8）" name="first">文章</el-tab-pane>
            <el-tab-pane label="应用（8）" name="second">应用</el-tab-pane>
            <el-tab-pane label="项目（8）" name="third">项目</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {defineComponent, reactive, toRefs, ref} from 'vue';
import {Tag} from '@/components/Tag';
import CenterTitle from '@/views/component/center-title';

export default defineComponent({
  name: "PersonalCenter",
  components: {
    Tag,
    CenterTitle
  },
  setup() {
    const tags = ref(['标签一', '标签二', '标签三'])
    const addTagVisible = ref(true)
    const closable = ref(true)
    //父组件传入子组件的数据
    const blogData = reactive({
      title: '我是博客的标题',
      content: '我是博客的内容'
    })
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
      ...toRefs(blogData),
      ...toRefs(avatar)
    }
  }
})
</script>
<style lang="scss" scoped>
.el-divider--horizontal {
  background: 0 0;
  border-top: 1px dashed #e8eaec;
}
</style>