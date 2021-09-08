<template>
  <el-row>
    <el-col :span="12">
      <el-card>
        <IconPicker :iconList="icons"/>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {defineComponent, ref, onMounted, reactive, computed, unref} from 'vue';
import iconList from '@/assets/icons/icon';
import {IconPicker} from '@/components/Icon'
export default defineComponent({
  components: {IconPicker},
  setup() {
   const icons = reactive(iconList)
    return {
      icons
    }
  }
})
</script>