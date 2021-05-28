import router from "@/router";
import {createProgressGuard} from "@/router/guard/progressGuard";
import {createPageLoadingGuard} from "@/router/guard/pageLoadingGuard";
import {createPageGuard} from "@/router/guard/pageGuard";

export function setupRouterGuard() {
  createPageGuard(router);
  createPageLoadingGuard(router);
  createProgressGuard(router);
}