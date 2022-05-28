import type { NavigationGuardWithThis } from 'vue-router';

export const pageTitle: NavigationGuardWithThis<undefined> = function (
  to,
  from,
  next
) {
  const titleFromMeta = to.meta.title;
  if (titleFromMeta !== undefined) document.title = titleFromMeta;

  next();
};
