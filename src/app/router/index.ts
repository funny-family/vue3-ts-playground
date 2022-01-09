import './types/router-meta';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { resolveGuards } from './utils';
// import { pageTitle } from './guards/global/page-title.guard';
// import { justLog } from './guards/global/just-log.guard';

console.table(routes);

export const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach(resolveGuards(pageTitle, justLog));
// router.beforeEach((to, from, next) => {
//   // pageTitle(to, from, next);
//   // justLog(to, from, next);
//   next();
// });

// router.beforeResolve(async (to, from, next) => {
//   //
// });

// router.afterEach((to, from, failure) => {
//   //
// });

// // @ts-ignore
// router.prototype.use = () => {
//   console.log('use method!');
// };

/**
 * @see https://stackoverflow.com/questions/68449206/how-to-implement-router-leave-guard-like-vue-router-in-react-router-dom
 */
