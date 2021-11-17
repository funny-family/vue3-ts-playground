import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { Names } from '../names';

export default {
  path: '/my',
  name: Names.My,
  component: () => import('../../../pages/my/my.component.vue')
} as RouteRecordRawWithoutChildren;
