<template>
  <el-popover
    ref="popover"
    placement="bottom"
    popper-class="icon-popper"
    show-arrow
    trigger="click"
    :disabled="disabled"
    :width="popWrapWidth-20"
  >
    <template #reference>
      <el-input
        ref="inputElRef"
        v-model="query"
        :placeholder="$props.placeholder"
        :clearable="$props.clearable"
        :disabled="$props.disabled"
        :readonly="$props.readonly"
        @input="handleSearch"
      >
        <template #append>
          <slot name="append">
            <icon-svg :prefix="$props.prefix" :name="selectIcon ? selectIcon : 'edit'" :size="$props.size"/>
          </slot>
        </template>
      </el-input>
    </template>

    <el-scrollbar ref="eScrollbar" wrap-class="el-select-dropdown__wrap"
                  view-class="el-select-dropdown__list" style="text-align: center">
      <ul class="icon-list" v-if="icons && icons.length > 0">
        <li v-for="(item, index) in icons" :key="index" @click="handleSelectIcon(item)">
          <slot name="icon" v-bind:icon="item">
            <icon-svg :prefix="$props.prefix" :name="item['font_class']" :size="$props.size"/>
          </slot>
        </li>
      </ul>
      <span v-else class="no-data" v-text="$props.emptyText"></span>
    </el-scrollbar>
  </el-popover>

</template>

<script>
import IconData from '../data/icons.data'
import {defineComponent, reactive, ref, toRefs, watch} from 'vue';
import {useDebounceFn, useElementBounding, useVModel} from "@vueuse/core";

const icons = IconData['glyphs'];

export default defineComponent({
  name: 'icon-picker',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: 'icon',
    },
    size: {
      type: [String, Number],
      default: 18,
    },
    placeholder: {
      type: String,
      default: '请选择图标'
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: '没有匹配到可用图标'
    }
  },
  setup(props, {emit}) {
    const state = reactive({
      icons: icons,
      query: '',
      disabled: false,
      visible: false,
    })

    const inputElRef = ref()
    const selectIcon = useVModel(props, 'modelValue', emit);

    const {width: popWrapWidth} = useElementBounding(inputElRef)

    const handleSelectIcon = (item) => {
      selectIcon.value = item['font_class'];
      state.query = item['font_class'];
    }

    const handleSearch = useDebounceFn((value) => {
      state.icons = value ? icons.filter(item => item['font_class'].includes(value)) : icons;
    }, 200)


    return {
      ...toRefs(state),
      selectIcon,
      popWrapWidth,
      handleSearch,
      handleSelectIcon,
      inputElRef,
    }
  }
})
</script>
<style lang="scss" scoped>
.icon-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;

  li {
    width: 30px;
    height: 30px;
    margin: 5px;

    i, svg {
      font-size: 20px;
      cursor: pointer;
    }
  }
}

.icon-popper {
  max-height: 400px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: hidden;

  &[x-placement^="bottom"] {
    margin-top: 5px;
  }
}

:deep(.el-input-group__append) {
  cursor: pointer;
}
</style>
