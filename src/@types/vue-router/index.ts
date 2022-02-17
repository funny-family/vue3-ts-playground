export * from '../../../node_modules/vue-router/dist/vue-router';

export { RouterLink } from './router-link';
export { RouterView } from './router-view';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}
