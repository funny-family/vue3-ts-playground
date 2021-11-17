import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { Names } from '../../../names';

export default {
  path: 'chats',
  name: Names.Chats,
  component: () => import('../../../../../pages/my/my.component.vue')
} as RouteRecordRawWithoutChildren;
