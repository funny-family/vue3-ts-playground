import type { RouteRecordRaw } from 'vue-router';

export type RouteRecordRawWithoutChild = Omit<RouteRecordRaw, 'children'>;
