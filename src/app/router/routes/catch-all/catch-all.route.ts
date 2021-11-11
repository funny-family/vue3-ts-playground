import type { RouteRecordRawWithoutChild } from '@/app/router/types';
import { names } from '../names';

export default {
  path: '/:catchAll(.*)',
  redirect: {
    name: names.notFound
  }
} as RouteRecordRawWithoutChild;
