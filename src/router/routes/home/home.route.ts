import { RouteRecordRaw } from "vue-router";

export default {
  path: "/",
  component: () => import("../../../pages/home/home.component.vue"),
} as RouteRecordRaw;
