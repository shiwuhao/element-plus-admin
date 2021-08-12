<template>
  {{data}}
  <BasicDrawer
    title="新增配置"
    direction="rtl"
    size="50%"
    v-model="$props.modelValue"
    @close="drawerClose">
    <template #default>
      <el-form :model="form" label-width="80px" size="small">
        <el-form-item label="配置分组">
          <el-select v-model="form.group" clearable placeholder="请选择配置分组" style="width: 100%;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配置类型">
          <el-select v-model="form.type" clearable placeholder="请选择配置类型" style="width: 100%;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渲染组件">
          <el-select v-model="form.component" clearable placeholder="请选择渲染组件" style="width: 100%;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配置标识">
          <el-input v-model="form.name" autocomplete="off">
            <template #prepend v-if="form.group">{{ form.group }}</template>
          </el-input>
        </el-form-item>
        <el-form-item label="配置名称">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置项">
          <el-input v-model="form.extra" type="textarea" rows="3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="配置值">
          <el-input v-model="form.value" type="textarea" rows="3" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="drawerClose" size="small">取 消</el-button>
      <el-button type="primary" size="small" @click="$refs.drawer.closeDrawer()" :loading="loading">
        {{ loading ? '提交中 ...' : '确 定' }}
      </el-button>
    </template>
  </BasicDrawer>
</template>

<script>
import {BasicDrawer} from "@/components/Drawer";
import {reactive, toRefs} from "vue";

export default {
  name: "editTemplate",
  components: {BasicDrawer},
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    }
  },
  setup(props, {emit}) {
    // const {data, isFinished} = useConfigRequest('index',{});
    const state = reactive({
      loading: false,
      form: {}
    });

    const drawerClose = () => emit('update:modelValue', false);

    return {
      ...toRefs(state),
      // data,
      // isFinished,
      drawerClose
    }
  }
}
</script>