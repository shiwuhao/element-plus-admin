<template>
  <el-drawer
    title="新增配置"
    v-model="$props.modelValue"
    direction="rtl"
    custom-class="drawer"
    size="50%"
    ref="drawer"
    append-to-body
    @close="drawerClose"
  >
    <div class="drawer__content">
      <el-form :model="form" label-width="80px" size="small">
        <el-form-item label="配置分组">
          <el-select v-model="form.group" placeholder="请选择配置分组">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配置类型">
          <el-select v-model="form.type" placeholder="请选择配置类型" style="width: 100%;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渲染组件">
          <el-select v-model="form.component" placeholder="请选择渲染组件" style="width: 100%;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配置标识">
          <el-input v-model="form.name" autocomplete="off"></el-input>
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
      <div class="drawer-footer">
        <el-button @click="cancelForm" size="small">取 消</el-button>
        <el-button type="primary" size="small" @click="$refs.drawer.closeDrawer()" :loading="loading">
          {{ loading ? '提交中 ...' : '确 定' }}
        </el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "editTemplate",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, {emit}) {
    const state = reactive({
      loading: false,
      form: {}
    });

    const drawerClose = () => emit('update:modelValue', false);

    return {
      ...toRefs(state),
      drawerClose
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  .el-drawer__header {
    padding: 10px !important;
  }

  .drawer__content {
    width: 100%;
  }

  .drawer-footer {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
    padding-right: 20px;
    height: 60px;
    line-height: 60px;
    width: 100%;
    border-top: 1px solid #EEEEEF;
  }
}

</style>