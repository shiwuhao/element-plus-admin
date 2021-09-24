import {setupPermissionDirective} from "@/directives/permission";

export function setupGlobalDirectives(app) {
  setupPermissionDirective(app);
}