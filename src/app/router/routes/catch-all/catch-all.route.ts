import type { RouteRecordRawWithoutChildren } from '@/app/router/types';
import { Names } from '../names';

export default {
  path: '/:catchAll(.*)',
  redirect: {
    name: Names.NotFound
  }
} as RouteRecordRawWithoutChildren;
