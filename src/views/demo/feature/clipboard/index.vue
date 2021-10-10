<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      使用VueUse useClipboard
      <el-link type="primary" href="https://vueuse.org/core/useClipboard/" target="_blank">查看</el-link>
    </template>
    <el-card header="Copy" shadow="none">
      <p>
        Current copied: <code>{{ text || 'none' }}</code>
      </p>
      <el-input v-model="input">
        <template #append>
          <el-button type="primary" @click='copy(input)'>
            {{ !copied ? 'Copy' : 'Copied!' }}
          </el-button>
        </template>
      </el-input>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page'
import {useClipboard, usePermission} from '@vueuse/core'
import {ref} from "vue";

export default {
  name: "index",
  components: {PageWrapper},
  setup() {
    const input = ref('Hello')
    const {text, copy, copied, isSupported} = useClipboard()

    return {
      input,
      text,
      copy,
      copied
    }
  }
}
</script>

<style scoped>

</style>