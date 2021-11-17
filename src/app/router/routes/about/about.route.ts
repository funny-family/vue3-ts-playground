import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { Names } from '../names';

export default {
  path: '/about',
  name: Names.About,
  component: () => import('../../../pages/about/about.component.vue')
} as RouteRecordRawWithoutChildren;
