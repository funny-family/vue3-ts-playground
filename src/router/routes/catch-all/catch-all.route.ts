import type { RouteRecordRawWithoutChild } from '@/router/types';
import { names } from '../names';

export default {
  path: '/:catchAll(.*)',
  redirect: {
    name: names.notFound
  }
} as RouteRecordRawWithoutChild;
