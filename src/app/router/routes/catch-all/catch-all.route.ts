import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { RouteName } from '../names';

export default {
  path: '/:catchAll(.*)',
  redirect: {
    name: RouteName.notFound
  }
} as RouteRecordRawWithoutChildren;
