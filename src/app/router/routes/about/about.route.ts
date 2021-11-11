import type { RouteRecordRawWithoutChild } from '@/app/router/types';
import { names } from '../names';

export default {
  path: '/about',
  name: names.about,
  component: () => import('../../../pages/about/about.component.vue')
} as RouteRecordRawWithoutChild;
