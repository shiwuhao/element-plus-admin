<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      <p>
        使用VueUse useDebounce
        <el-link type="primary" href="https://vueuse.org/shared/useDebounce/" target="_blank">查看</el-link>
      </p>
      <p>应用场景：无论频率多高只执行最后一次，例如搜索框远程搜索input事件,resize事件</p>
    </template>
    <el-card shadow="none">
      <el-input v-model="input" placeholder="Try to type anything..." type="text"/>
      <p>Delay is set to 1000ms for this demo.</p>
      <p>Debounced: {{ debounced }}</p>
      <p>Times Updated: {{ updated }}</p>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/Page/index.js'
import {useDebounce} from '@vueuse/core'
import {ref, watch} from "vue";

export default {
  name: "index",
  components: {PageWrapper},
  setup() {

    const input = ref('')
    const debounced = useDebounce(input, 1000)
    const updated = ref(0)
    watch(debounced, () => (updated.value += 1))

    return {
      input,
      debounced,
      updated,
    }
  }
}
</script>