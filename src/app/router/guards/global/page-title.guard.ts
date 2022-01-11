import type { NavigationGuardWithThis } from 'vue-router';

export const pageTitle: NavigationGuardWithThis<undefined> = (
  to,
  from,
  next
) => {
  if (to.meta.title !== undefined) document.title = to.meta.title;

  next();
};
