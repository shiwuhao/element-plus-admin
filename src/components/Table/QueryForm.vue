<template>
  <el-form ref="`queryForm`"
           :model="form"
           :size="size"
           :label="label"
           :label-width="label ? labelWidth : ''"
           @submit.native.prevent="handleSubmit"
           @keyup.enter.native="handleSubmit">
    <el-row :gutter="20">
      <template v-for="(item,index) in options">
        <el-col :xl="label ? 6 : 4"
                :lg="label ? 6 : 5"
                :md="label ? 8 : 6"
                :sm="label ? 12 : 12"
                :xs="label ? 24 : 24"
                :key="index"
                v-if="index < advancedLength || advanced ">
          <el-form-item v-if="!item.slot"
                        :label="label ? item.label : ''"
                        :label-width="label ? item.labelWidth : ''"
                        :prop="item.key">
            <el-input v-if="item.type === 'input'"
                      v-model="form[item.key]"
                      :placeholder="item.placeholder || item.label"
                      :clearable="item.clearable ? !!item.clearable : clearable"
                      :style="{width:width}">
            </el-input>
            <el-select v-else-if="item.type === 'select'"
                       v-model="form[item.key]"
                       :placeholder="item.placeholder || item.label"
                       :multiple="item.multiple"
                       :clearable="item.clearable ? !!item.clearable : clearable"
                       :style="{width:width}"
                       collapse-tags>
              <el-option
                v-for="(option,optionIndex) in item.options"
                :key="optionIndex"
                :label="option.label"
                :value="option.value"/>
            </el-select>
            <el-date-picker v-else-if="item.type === 'date-picker'"
                            v-model="form[item.key]"
                            :type="item.displayType"
                            :placeholder="item.placeholder || item.label"
                            :clearable="item.clearable ? !!item.clearable : clearable"
                            :value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'"
                            :range-separator="item.rangeSeparator"
                            :start-placeholder="item.startPlaceholder"
                            :end-placeholder="item.endPlaceholder"
                            :style="{width:width}">
            </el-date-picker>
            <el-time-picker v-else-if="item.type === 'time-picker'"
                            v-model="form[item.key]"
                            :is-range="item.displayType === 'timerange'"
                            :type="item.type"
                            :placeholder="item.placeholder || item.label"
                            :clearable="item.clearable ? !!item.clearable : clearable"
                            :value-format="item.valueFormat ? item.valueFormat : 'HH:mm:ss'"
                            :range-separator="item.rangeSeparator"
                            :start-placeholder="item.startPlaceholder"
                            :end-placeholder="item.endPlaceholder"
                            :style="{width:width}">
            </el-time-picker>
            <el-cascader v-else-if="item.type === 'cascader'"
                         v-model="form[item.key]"
                         :options="item.options"
                         :placeholder="item.placeholder || item.label"
                         :clearable="item.clearable ? !!item.clearable : clearable"
                         :filterable="item.filterable ? !!item.filterable : false"
                         :show-all-levels="item.showAllLevels"
                         :style="{width:width}">
            </el-cascader>
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
          <el-button type="primary" :icon="iconButton ? 'el-icon-search' : ''" @click="handleSearch">
            {{ iconButton ? '' : '搜索'}}
          </el-button>
          <el-button type="default" :icon="iconButton ? 'el-icon-refresh-right' : ''"
                     @click="handleReset('`queryForm`')">
            {{ iconButton ? '' : '重置'}}
          </el-button>
          <slot name="button"></slot>
          <el-link type="primary" @click="toggleAdvanced" v-if="options.length > advancedLength"
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
      labelWidth: {
        type: String,
        default: '100px',
      },
      width: {
        type: String,
        default: '100%',
      },
      iconButton: {
        type: Boolean,
        default: false,
      },
      clearable: {
        type: Boolean,
        default: false,
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