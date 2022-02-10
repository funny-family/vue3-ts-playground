import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../names';

export default {
  path: '/about',
  name: RouteName.about,
  component: () => import('../../../pages/about/about.component.vue')
} as RouteRecordRawWithoutChildren;
