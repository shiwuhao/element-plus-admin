<template>
  <BasicDrawer
    title="新增配置"
    direction="rtl"
    size="50%"
    v-model="$props.modelValue"
    @close="drawerClose">
    <template #default>
      <pre lang="yaml">
      {{ form }}
      </pre>
      <el-form :model="form" :rules="rules" label-width="80px" size="small">
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
      <el-button @click="drawerClose" size="small">取 消</el-button>
      <el-button type="primary" size="small" @click="handleSubmit" :loading="loading">
        {{ loading ? '提交中 ...' : '确 定' }}
      </el-button>
    </template>
  </BasicDrawer>
</template>

<script>
import {BasicDrawer} from "@/components/Drawer";
import {onMounted, reactive, toRefs, unref, watch} from "vue";
import {useConfig} from "@/hooks/config/useConfig";
import {useConfigRequest} from "@/api/useConfigRequest";

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
    const {editable} = toRefs(props);
    const {fetchStore, fetchUpdate, fetchDetail} = useConfigRequest();
    const {getGroups, getTypes, getComponents} = useConfig();
    const state = reactive({
      loading: false,
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

    const drawerClose = () => emit('update:modelValue', false);
    const handleSubmit = async () => {
      console.log(123112);
      const {data: response} = !state.form.id ? await fetchStore(state.form) : await fetchUpdate(state.form);
      console.log(response)
      emit('update:editable', response.data);
      drawerClose();
    }

    watch(editable, async ({id}) => {
      const {data:response} = await fetchDetail(id);
      const {data} = unref(response);
      console.log('data', data);
      state.form = data;
    })

    return {
      ...toRefs(state),
      drawerClose,
      getGroups,
      getTypes,
      getComponents,
      handleSubmit,
    }
  }
}
</script>