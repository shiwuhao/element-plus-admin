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
        v-model="selectIcon"
        :placeholder="$props.placeholder"
        :clearable="$props.clearable"
        :disabled="$props.disabled"
        :readonly="$props.readonly"
        @input="handleSearch"
      >
        <template #append>
          <slot name="append">
            <icon-svg :name="selectIcon ? selectIcon : 'el-edit-square'" :size="$props.size"/>
          </slot>
        </template>
      </el-input>
    </template>

    <el-scrollbar ref="eScrollbar" wrap-class="el-select-dropdown__wrap"
                  view-class="el-select-dropdown__list" style="text-align: center">
      <ul class="icon-list" v-if="true">
        <li v-for="(item, index) in icons" :key="index" @click="handleSelect(item)">
          <slot name="icon" v-bind:icon="item">
            <icon-svg :name="item" :size="$props.size"/>
          </slot>
        </li>
      </ul>
      <span v-else class="no-data" v-text="$props.emptyText"></span>
    </el-scrollbar>
  </el-popover>

</template>

<script>
import {icons} from '../data/index'
import {defineComponent, reactive, ref, toRefs, watch} from 'vue';
import {useDebounceFn, useElementBounding, useVModel} from "@vueuse/core";


export default defineComponent({
  name: 'icon-picker',
  props: {
    modelValue: {
      type: String,
      default: '',
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
    })

    const inputElRef = ref()
    const selectIcon = useVModel(props, 'modelValue', emit);

    const {width: popWrapWidth} = useElementBounding(inputElRef)

    const handleSelect = (item) => {
      selectIcon.value = item;
    }

    const handleSearch = useDebounceFn((value) => {
      state.icons = icons.filter(item => item.includes(value))
    }, 200)


    return {
      ...toRefs(state),
      inputElRef,
      selectIcon,
      popWrapWidth,
      handleSearch,
      handleSelect,
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
