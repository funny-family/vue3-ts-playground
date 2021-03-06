import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../../../names';

export default {
  path: 'profile',
  name: RouteName.profile,
  component: () =>
    import('@/app/components/my/children/profile/profile.component.vue')
} as RouteRecordRawWithoutChildren;
