<template>
  <page-wrapper :title="$route.meta['title']">
    <template #content>
      使用VueUse useQRCode
      <el-link type="primary" href="https://vueuse.org/integrations/useQRCode/" target="_blank">查看</el-link>
    </template>
    <el-card shadow="none">
      <note>
        二维码的文本内容
      </note>
      <el-input v-model="text" type="text"/>
      <img v-if="text" :src="qrcode" alt="QR Code">
    </el-card>
  </page-wrapper>
</template>
<script>
import {PageWrapper} from '@/components/page'
import {useQRCode} from '@vueuse/integrations/useQRCode'
import {ref} from "vue";

export default {
  name: "index",
  components: {PageWrapper},
  setup() {
    const text = ref('element-plus-admin')
    const qrcode = useQRCode(text, {
      errorCorrectionLevel: 'H',
      margin: 3,
    })

    return {
      text,
      qrcode
    }
  }
}
</script>