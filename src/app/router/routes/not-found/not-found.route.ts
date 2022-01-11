import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { Names } from '../names';

export default {
  path: '/404',
  name: Names.NotFound,
  component: () => import('../../../pages/not-found/not-found.component'),
  meta: {
    title: '404 not found.'
  }
} as RouteRecordRawWithoutChildren;
