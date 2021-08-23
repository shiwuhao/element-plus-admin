<template>
  <BasicDrawer
    :title="!form.id ? '新增配置' : '编辑配置'"
    direction="rtl"
    size="50%"
    :loading="fetchLoading"
    v-model="$props.modelValue"
    @close="handleDrawerClose">
    <template #default>
      <el-form ref="formRef" :model="form" :rules="rules" label-width="80px" size="small">
        <el-form-item label="配置分组" prop="group">
          <el-select v-model="form.group" clearable placeholder="请选择配置分组" style="width: 100%;">
            <template v-for="(item,index) in getGroups" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="配置类型" prop="type">
          <el-select v-model="form.type" clearable placeholder="请选择配置类型" style="width: 100%;">
            <template v-for="(item,index) in getTypes" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="渲染组件" prop="component">
          <el-select v-model="form.component" clearable placeholder="请选择渲染组件" style="width: 100%;">
            <template v-for="(item,index) in getComponents" :key="index">
              <el-option :label="item.label" :value="item.value"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="配置标识" prop="name">
          <el-input v-model="form.name" autocomplete="off">
            <template #prepend v-if="form.group">{{ form.group }}</template>
          </el-input>
        </el-form-item>
        <el-form-item label="配置名称" prop="title">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置项" prop="extra">
          <el-input v-model="form.extra" type="textarea" rows="3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置值" prop="value">
          <el-input v-model="form.value" type="textarea" rows="3" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="handleDrawerClose" size="small">取 消</el-button>
      <el-button type="primary" size="small" @click="handleSubmit" :loading="submitLoading">
        {{ submitLoading ? '提交中 ...' : '确 定' }}
      </el-button>
    </template>
  </BasicDrawer>
</template>

<script>
import {BasicDrawer} from "@/components/Drawer";
import {inject, nextTick, onMounted, reactive, ref, toRefs, unref, watch, watchEffect} from "vue";
import {useConfig} from "@/hooks/config/useConfig";
import {useFetchDetail, useFetchStore, useFetchUpdate} from "@/api/useConfigRequest";
import {ElMessage} from 'element-plus';

export default {
  name: "editTemplate",
  components: {BasicDrawer},
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: [Object],
      default: () => {
        return {}
      }
    }
  },
  setup(props, {emit}) {
    const {editable, editableIndex} = toRefs(props);
    console.log(editable);
    const {getGroups, getTypes, getComponents} = useConfig();
    const state = reactive({
      fetchLoading: '',
      submitLoading: false,
      form: {},
      rules: {
        group: [{required: true, message: '请选择配置分组', trigger: 'change'}],
        type: [{required: true, message: '请选择配置类型', trigger: 'change'}],
        component: [{required: true, message: '请选择渲染组件', trigger: 'change'}],
        name: [{required: true, message: '请输入配置标识', trigger: 'blur'}],
        title: [{required: true, message: '请输入配置标题', trigger: 'blur'}],
        extra: [{required: true, message: '请输入配置项', trigger: 'blur'}],
        value: [{required: true, message: '请输入配置值', trigger: 'blur'}]
      },
    });
    const dialog = inject('dialog');
    const formRef = ref();
    const handleDrawerClose = () => {
      state.form = {};
      dialog.value = false;
      nextTick(() => formRef.value.clearValidate());
      emit('edit-close');
    }

    const handleSubmit = () => {
      const {id, ...requestData} = state.form;
      const {data, loading} = id ? useFetchUpdate(id, requestData) : useFetchStore(requestData);
      state.submitLoading = loading;
      emit('callback', data);
      ElMessage.success('添加成功');
      handleDrawerClose();
    }

    const fetchDetail = () => {
      if (!editable.value.id) return;
      const {data, loading: fetchLoading} = useFetchDetail(editable.value.id);
      watch(data, () => state.form = data.value.data);
      state.fetchLoading = fetchLoading;
    }

    watch(editable, fetchDetail)

    return {
      ...toRefs(state),
      // fetchLoading,
      getGroups,
      getTypes,
      getComponents,
      formRef,
      handleSubmit,
      handleDrawerClose,
    }
  }
}
</script>