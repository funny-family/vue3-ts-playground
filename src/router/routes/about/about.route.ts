import { RouteRecordRaw } from "vue-router";

export default {
  path: "/about",
  component: () => import("../../../pages/about/about.component.vue"),
} as RouteRecordRaw;
