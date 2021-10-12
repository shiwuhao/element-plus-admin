<template>
  <el-card shadow="none">
    <template #header>
      当前用户拥有的权限：
      <el-select v-model="currentUser" placeholder="Select" size="mini" @change="changeUser">
        <el-option v-for="item in changeUsers" :key="item.value" :label="item.username" :value="item.id">
          <span style="float: left">{{ item.username }}</span>
          <span style="float: right;color: var(--el-text-color-secondary);font-size: 13px;">
            {{ item.id }}
          </span>
        </el-option>
      </el-select>
    </template>
    <el-tabs v-model="currentTab">
      <el-tab-pane label="菜单" name="menus">
        demo数据中包含了预览的前台路由菜单,具体参考src/store/modules/permission.js
        <pre>{{ getMenus }}</pre>
      </el-tab-pane>
      <el-tab-pane label="角色" name="roles">
        <pre>{{ getRoles }}</pre>
      </el-tab-pane>
      <el-tab-pane label="动作" name="actions">
        <pre>{{ getActions }}</pre>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<style lang="scss" scoped>
.el-tab-pane {
  height: 200px;
  overflow-x: auto;
}
</style>
<script>
import Menu from '@/layouts/menu';
import {PageWrapper} from "@/components/Page"
import {defineComponent, toRefs, reactive, computed} from "vue";
import {usePermission} from "@/composables/usePermission.js";
import {useUser} from "@/composables/useUser.js";
import {useStore} from 'vuex'


export default defineComponent({
  name: "UserPermissions",
  components: {PageWrapper, Menu},
  setup() {
    const state = reactive({
      currentTab: 'menus',
      changeUsers: [
        {id: 1, username: '用户1', token: 'mockToken1'},
        {id: 2, username: '用户2', token: 'mockToken2'}
      ],
    })

    const user = useUser();
    const {dispatch} = useStore();
    const permissions = usePermission();

    const changeUser = async (id) => {
      const user = state.changeUsers.find(item => item.id === id);
      await dispatch('user/setToken', user['token']);
      await dispatch('permission/getPermissions');
    }

    const currentUser = computed(() => {
      return state.changeUsers.find(item => item.token === user.getToken.value)['id'];
    })

    return {
      ...toRefs(state),
      ...toRefs(permissions),
      ...toRefs(user),
      currentUser,
      changeUser,
    }
  },
})
</script>

