import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

console.table(routes);

export const router = createRouter({
  history: createWebHistory(),
  routes
});

/**
 * @see https://stackoverflow.com/questions/68449206/how-to-implement-router-leave-guard-like-vue-router-in-react-router-dom
 */
