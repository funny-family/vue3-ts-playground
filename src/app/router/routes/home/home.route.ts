import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { Names } from '../names';

export default {
  path: '/',
  name: Names.Home,
  component: () => import('../../../pages/home/home.component.vue')
} as RouteRecordRawWithoutChildren;
