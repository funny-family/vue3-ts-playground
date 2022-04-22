import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../names';

export default {
  path: '/404',
  name: RouteName.notFound,
  component: () => import('@/app/components/not-found/not-found.component'),
  meta: {
    title: '404 not found.'
  }
} as RouteRecordRawWithoutChildren;
