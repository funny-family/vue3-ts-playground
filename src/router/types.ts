import type { RouteRecordRaw } from "vue-router";

export type T = string;

export type RouteOptions<T> = {
  [k in keyof T]: string;
};
