import store from '@/store'

const {body, hidden} = document;
const WIDTH = 992;

export default {
  watch: {
    $route() {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSideBar');
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile');
      store.dispatch('app/closeSideBar');
    }
  },
  methods: {
    // 判断移动端
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    // 调整大小
    $_resizeHandler() {
      if (!hidden) {
        const isMobile = this.$_isMobile();
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop');
        if (isMobile) {
          store.dispatch('app/closeSideBar');
          store.dispatch('setting/changeSetting', {layout: 'sideMenu'});
        }
      }
    }
  }
}
