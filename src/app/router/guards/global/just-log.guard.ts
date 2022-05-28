import type { NavigationGuardWithThis } from 'vue-router';

export const justLog: NavigationGuardWithThis<undefined> = function (
  to,
  from,
  next
) {
  console.log('just console log');

  next();
};
