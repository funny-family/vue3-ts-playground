import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../names';

export default {
  path: '/my',
  name: RouteName.my,
  component: () => import('@/app/components/my/my.component.vue')
} as RouteRecordRawWithoutChildren;
