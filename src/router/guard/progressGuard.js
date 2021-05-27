import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
import {unref} from 'vue'
import {useTransitionSetting} from "@/hooks/setting/useTransitionSeeting";

/**
 * ProgressGuard
 * @param router
 */
export function createProgressGuard(router) {
  const {getOpenNProgress} = useTransitionSetting();
  router.beforeEach(async ({meta}) => {
    if (meta.loaded) return true;
    unref(getOpenNProgress) && nProgress.start();
    return true;
  });

  router.afterEach(async ({meta}) => {
    if (meta.loaded) return true;
    unref(getOpenNProgress) && nProgress.done();
    return true;
  });
}