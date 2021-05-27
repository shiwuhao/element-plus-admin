import router from "@/router";
import {createProgressGuard} from "@/router/guard/progressGuard";

export function setupRouterGuard() {
  createProgressGuard(router)
}