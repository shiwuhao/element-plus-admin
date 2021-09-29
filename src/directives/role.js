import {usePermission} from "@/composables/usePermission";

const mounted = (el, binding) => {
  const {hasRole} = usePermission();
  const value = binding.value;
  if (!value) return;
  if (!hasRole(value)) {
    el.parentNode?.removeChild(el);
  }
}

export function setupRoleDirective(app) {
  app.directive('role', {mounted})
}