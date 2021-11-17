import type { RouteRecordRaw } from 'vue-router';

export type RouteRecordRawWithoutChildren = Omit<RouteRecordRaw, 'children'>;
