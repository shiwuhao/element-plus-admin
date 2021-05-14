<template>
  <div class="container">
    <el-drawer
      title="系统布局设置"
      v-model="getShowSettingDrawer"
      direction="rtl"
      :size="260"
      :show-close="true"
      :append-to-body="true"
      @closed="closedSettingDrawer"
    >
      <div class="drawer-container">
        <div class="setting-group">
          <h3 class="setting-title">导航栏模式</h3>
          <div class="flex-row-left">
            <template v-for="(item,index) in menuThemes" :key="index">
              <el-tooltip effect="dark" :content="item.title" placement="top-start">
                <div class="setting-item" @click="handleMenuTheme(item)">
                  <img :src="item.img"/>
                  <i class="el-icon-check" v-if="item.theme === getDarkMode"/>
                </div>
              </el-tooltip>
            </template>
          </div>
        </div>
        <el-divider/>

        <div class="setting-group">
          <h3 class="setting-title">内容区域</h3>
          <div>
            <div class="drawer-item flex-row-center">
              <span>顶栏</span>
              <el-switch v-model="navBar" class="drawer-switch"/>
            </div>
            <div class="drawer-item flex-row-center">
              <span>Tag视图</span>
              <el-switch v-model="tagView" class="drawer-switch"/>
            </div>

            <div class="drawer-item">
              <span>固定Header</span>
              <el-switch v-model="fixedHeader" class="drawer-switch"/>
            </div>

            <div class="drawer-item">
              <span>侧边栏Logo</span>
              <el-switch v-model="getShowLogo" class="drawer-switch" @change="toggleLogo"/>
            </div>
            <div class="drawer-item">
              <span>面包屑导航</span>
              <el-switch v-model="getShowBreadcrumb" class="drawer-switch" @change="toggleBreadcrumb"/>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import Theme from "@/components/SettingDrawer/ThemeColor/Theme";
import {useRootSetting} from "@/hooks/setting/useRootSeeting";

export default {
  name: 'setting',
  components: {Theme},
  props: ['theme'],
  data() {
    return {
      color1: '',
      selectedMenuTheme: 'dark',
      menuThemes: [
        {
          mode: 'light',
          type: 'sidebar',
          title: '左侧菜单模式',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
        },
        {
          mode: 'dark',
          type: 'mix',
          title: '顶部菜单混合模式',
          img: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
        },
        {
          mode: 'other',
          type: 'top-menu',
          title: '顶部菜单模式',
          img: 'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
        }
      ],

    }
  },
  setup() {
    const {
      getShowLogo,
      getShowBreadcrumb,
      getShowSettingDrawer,
      getDarkMode,
      closedSettingDrawer,
      toggleLogo,
      toggleBreadcrumb,
    } = useRootSetting();
    return {
      getShowLogo,
      getShowBreadcrumb,
      getShowSettingDrawer,
      getDarkMode,
      closedSettingDrawer,
      toggleLogo,
      toggleBreadcrumb,
    }
  },
};
</script>
<style lang="scss" scoped>
.drawer-container {
  padding: 0 24px 24px 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .setting-group {
    .setting-title {
      font-size: 14px;
      color: rgba(0, 0, 0, .85);
    }

    .setting-item {
      position: relative;
      margin-right: 16px;
      cursor: pointer;

      img {
        width: 48px;
      }

      i.el-icon-check {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        color: #1890ff;
        font-size: 16px;
        font-weight: bolder;
      }
    }

    .color-block {
      width: 20px;
      height: 20px;
      border-radius: 2px;
      float: left;
      cursor: pointer;
      margin-right: 8px;
      padding-left: 0px;
      padding-right: 0px;
      text-align: center;
      color: #fff;
      font-weight: 700;

      i.el-icon-check {
        font-size: 14px;
      }
    }
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

</style>