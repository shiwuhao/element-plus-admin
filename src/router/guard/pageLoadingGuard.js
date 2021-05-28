import {unref} from 'vue'
import {useTransitionSetting} from "@/hooks/setting/useTransitionSeeting";
import store from "@/store";

/**
 * PageLoadingGuard
 * @param router
 */
export function createPageLoadingGuard(router) {
  const {getOpenPageLoading} = useTransitionSetting();
  router.beforeEach(async ({meta}) => {
    if (meta.loaded) return true;
    if (unref(getOpenPageLoading)) await store.dispatch('app/setPageLoading', true);
    return true;
  });

  router.afterEach(async ({meta}) => {
    if (meta.loaded) return true;
    if (unref(getOpenPageLoading)) {
      setTimeout(async () => {
        await store.dispatch('app/setPageLoading', false);
      }, 3000);
    }
    return true;
  });
}