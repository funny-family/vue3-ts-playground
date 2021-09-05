import { RouteRecordRaw } from "vue-router";

export default {
  path: "/404",
  component: () => import("../../../pages/not-found/not-found.component"),
} as RouteRecordRaw;
