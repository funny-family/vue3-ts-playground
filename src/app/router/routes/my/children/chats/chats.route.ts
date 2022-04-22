import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../../../names';

export default {
  path: 'chats',
  name: RouteName.chats,
  component: () =>
    import('@/app/components/my/children/chats/chats.component.vue')
} as RouteRecordRawWithoutChildren;
