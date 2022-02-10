import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../names';

export default {
  path: '/',
  name: RouteName.home,
  component: () => import('../../../pages/home/home.component.vue')
} as RouteRecordRawWithoutChildren;
