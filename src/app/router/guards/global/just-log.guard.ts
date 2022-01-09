import type { NavigationGuardWithThis } from 'vue-router';

export const justLog: NavigationGuardWithThis<undefined> = (to, from, next) => {
  console.log('just console log');

  next();
};
