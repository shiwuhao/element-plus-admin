<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      <p>
        使用VueUse useThrottle
        <el-link type="primary" href="https://vueuse.org/shared/usethrottle/" target="_blank">查看</el-link>
      </p>
      <p>应用场景：无论频率多高只按照固定节奏执行(类似于技能冷却时间),例如 鼠标不断点击触发，mousedown(单位时间内只触发一次)</p>
    </template>
    <el-card shadow="none">
      <el-input v-model="input" placeholder="Try to type anything..." type="text"/>
      <p>Delay is set to 1000ms for this demo.</p>
      <p>Throttled: {{ throttled }}</p>
      <p>Times Updated: {{ updated }}</p>
      <p>Trailing: {{ trailing }}</p>
      <p>Leading: {{ leading }}</p>
    </el-card>
  </page-wrapper>
</template>

<script>
import {PageWrapper} from '@/components/page'
import {useThrottle} from '@vueuse/core'
import {ref, watch} from "vue";

export default {
  name: "index",
  components: {PageWrapper},
  setup() {

    const input = ref('')
    const trailing = ref(true)
    const leading = ref(false)
    const throttled = useThrottle(input, 1000, trailing.value, leading.value)
    const updated = ref(0)
    watch(throttled, () => (updated.value += 1))

    return {
      input,
      throttled,
      updated,
      trailing,
      leading
    }
  }
}
</script>