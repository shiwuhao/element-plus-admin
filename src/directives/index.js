import {setupPermissionDirective} from "@/directives/permission";
import {setupRoleDirective} from "@/directives/role";

export function setupGlobalDirectives(app) {
  setupPermissionDirective(app);
  setupRoleDirective(app);
}