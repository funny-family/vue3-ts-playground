import type { RouteRecordRawWithoutChild } from '@/router/types';
import { names } from '../../../names';

export default {
  path: 'profile',
  name: names.profile,
  component: () => import('../../../../../pages/my/children/profile/profile.component.vue')
} as RouteRecordRawWithoutChild;
