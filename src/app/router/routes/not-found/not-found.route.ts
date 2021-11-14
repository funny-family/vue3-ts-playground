import type { RouteRecordRawWithoutChild } from '@/app/router/types';
import { names } from '../names';

export default {
  path: '/404',
  name: names.notFound,
  component: () => import('../../../pages/not-found/not-found.component')
} as RouteRecordRawWithoutChild;