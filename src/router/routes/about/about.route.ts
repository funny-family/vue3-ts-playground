import { RouteRecordRaw } from "vue-router";

export default {
  path: "/about",
  name: "",
  component: () => import("../../../pages/about/about.component.vue"),
} as RouteRecordRaw;
