import { RouteRecordRaw } from "vue-router";

export default {
  path: "/my",
  component: () => import("../../../pages/my/my.component.vue"),
} as RouteRecordRaw;
