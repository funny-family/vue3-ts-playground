import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../names';

export default {
  path: '/test',
  name: RouteName.test,
  component: () => import('@/app/components/test-page/test-page.component')
} as RouteRecordRawWithoutChildren;
