import type { RouteRecordRawWithoutChild } from '@/router/types';
import { names } from '../names';

export default {
  path: '/',
  name: names.home,
  component: () => import('../../../pages/home/home.component.vue')
} as RouteRecordRawWithoutChild;
