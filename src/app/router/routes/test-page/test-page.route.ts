import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../names';

export default {
  path: '/test-page',
  name: RouteName.testPage,
  component: () => import('@/app/components/test-page/test-page.component')
} as RouteRecordRawWithoutChildren;
