import type { RouteRecordRawWithoutChild } from '@/app/router/types';
import { names } from '../names';

export default {
  path: '/',
  name: names.home,
  component: () => import('../../../pages/home/home.component.vue')
} as RouteRecordRawWithoutChild;
