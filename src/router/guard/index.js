import router from "@/router";
import {createProgressGuard} from "@/router/guard/progressGuard";
import {createPageLoadingGuard} from "@/router/guard/pageLoadingGuard";
import {createPageGuard} from "@/router/guard/pageGuard";
import {createPermissionGuard} from "@/router/guard/permissionGuard";

export function setupRouterGuard() {
  createPageGuard(router);
  createPageLoadingGuard(router);
  createProgressGuard(router);
  createPermissionGuard(router);
}