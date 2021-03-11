<template>
  <el-form ref="`queryForm`"
           :model="form"
           v-bind="$props"
           @submit.prevent="handleSubmit"
           @keyup.enter="handleSubmit">
    <el-row :gutter="20">
      <template v-for="(item,index) in options">
        <el-col :xl="label ? 6 : 4"
                :lg="label ? 6 : 5"
                :md="label ? 8 : 6"
                :sm="label ? 12 : 12"
                :xs="label ? 24 : 24"
                :key="index"
                v-if="index < $props.advancedLength || advanced ">
          <el-form-item v-if="!item.slot"
                        :label="label ? item.label : ''"
                        :label-width="label ? item.labelWidth : ''"
                        :prop="item.key">
            <el-input v-if="item.type === 'input'" v-model="form[item.key]" v-bind="item"
                      :style="{width:width}"></el-input>
            <el-select v-else-if="item.type === 'select'" v-model="form[item.key]" v-bind="item" :style="{width:width}">
              <el-option v-for="(option,oIndex) in item.options" :key="oIndex" :label="option.label"
                         :value="option.value"/>
            </el-select>
            <el-date-picker v-else-if="item.type === 'date-picker'" v-model="form[item.key]" v-bind="item"
                            :style="{width:width}"></el-date-picker>
            <el-time-picker v-else-if="item.type === 'time-picker'" v-model="form[item.key]" v-bind="item"
                            :style="{width:width}"></el-time-picker>
            <el-cascader v-else-if="item.type === 'cascader'" v-model="form[item.key]" v-bind="item"
                         :style="{width:width}"></el-cascader>
          </el-form-item>
          <slot v-else :name="item.slot"/>
        </el-col>
      </template>
      <el-col :xl="label ? 6 : 4"
              :lg="label ? 6 : 5"
              :md="label ? 8 : 6"
              :sm="label ? 12 : 12"
              :xs="label ? 24 : 24">
        <el-form-item class="query-button" style="margin-left: 0">
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button type="default" @click="handleReset('`queryForm`')">重置</el-button>
          <slot name="button"></slot>
          <el-link type="primary" @click.prevent="toggleAdvanced" v-if="options.length > $props.advancedLength"
                   style="margin-left:10px;font-size: 12px;">
            {{ advanced ? '收起' : '展开' }}
          </el-link>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'QueryForm',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: Object,
    size: {
      type: String,
      default: 'mini',
    },
    label: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '100%',
    },
    advancedLength: {
      type: Number,
      default: 3,
    },
    options: Array,
  },
  data() {
    return {
      datePickerTypes: ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'],
      advanced: false,
      form: {},
    }
  },
  watch: {
    form: function (newVal) {
      this.$emit('change', newVal);
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', {...this.form});
    },
    handleReset(formName) {
      this.$refs[formName].resetFields();
      this.$emit('reset');
    },
    handleSubmit() {
      this.handleSearch();
    },
    // 高级搜索
    toggleAdvanced() {
      this.advanced = !this.advanced;
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item {
  min-height: 34px !important;
  margin-bottom: 2px;
  margin-top: 2px;
}
</style>