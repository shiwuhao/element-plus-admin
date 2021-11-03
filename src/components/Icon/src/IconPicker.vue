<template>
  <el-row>
    <el-col>
      <el-autocomplete v-model="query" :fetch-suggestions="querySearch" @select="handleSelect"
                       popper-class="icon-picker">
        <template #default="{ item }">
          <div class="">
            <icon-svg :name="item['font_class']"/>
          </div>
        </template>
        <template #suffix>
          <icon-svg name="menu"/>
        </template>
      </el-autocomplete>
    </el-col>
  </el-row>
</template>

<script>
import IconData from '../data/icons.data'
import {computed, defineComponent, reactive, ref, toRefs} from 'vue';

const icons = IconData['glyphs'];

export default defineComponent({
  name: 'icon-picker',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      required: 16,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      icons: icons,
      query: ''
    })

    const querySearch = (queryString, cb) => {
      const results = queryString ? icons.filter(item => {
        return item['font_class'].toLowerCase().includes(queryString.toLowerCase())
      }) : icons;
      cb(results)
    }

    const handleSelect = () => {

    }
    return {
      ...toRefs(state),
      querySearch,
      handleSelect
    }
  }
})
</script>
<style lang="scss" >
.icon-picker {
  :deep(.el-scrollbar){
    .el-autocomplete-suggestion__wrap{
      .el-autocomplete-suggestion__list {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
