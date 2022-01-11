import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { pageTitle } from './guards/global/page-title.guard';
import { justLog } from './guards/global/just-log.guard';

console.table(routes);

export const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(pageTitle);
router.beforeEach(justLog);

/**
 * @see https://stackoverflow.com/questions/68449206/how-to-implement-router-leave-guard-like-vue-router-in-react-router-dom
 */
