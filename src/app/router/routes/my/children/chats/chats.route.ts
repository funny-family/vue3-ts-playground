import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../../../names';

export default {
  path: 'chats',
  name: RouteName.chats,
  component: () => import('../../../../../pages/my/my.component.vue')
} as RouteRecordRawWithoutChildren;
