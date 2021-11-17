import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { Names } from '../../../names';

export default {
  path: 'profile',
  name: Names.Profile,
  component: () => import('../../../../../pages/my/children/profile/profile.component.vue')
} as RouteRecordRawWithoutChildren;
