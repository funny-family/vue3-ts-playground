import type { RouteRecordRawWithoutChild } from '@/app/router/types';
import { names } from '../../../names';

export default {
  path: 'chats',
  name: names.chats,
  component: () => import('../../../../../pages/my/my.component.vue')
} as RouteRecordRawWithoutChild;
