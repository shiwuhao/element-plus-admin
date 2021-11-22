<template>
  <page-wrapper :title="$route.meta['title']">
    <el-card shadow="none">
      <el-tabs v-model="active">
        <el-tab-pane v-for="(group,index) in iconGroups" :key="index" :label="group.name" :name="index+''" lazy>
          <group-preview :icons="group['icons']"/>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page/index.js'
import {groups} from '@/components/Icon/data/index.js'
import {ref, shallowRef} from "vue";
import GroupPreview from './GroupPreview.vue'

export default {
  name: "index",
  components: {PageWrapper, GroupPreview},
  setup() {
    const iconGroups = shallowRef(groups);
    const active = ref('0')

    return {
      iconGroups,
      active
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-wrap {
  border: var(--el-border-base);
  cursor: pointer;
}
</style>