import { RouteRecordRaw } from "vue-router";

export default {
  path: "/",
  name: "",
  component: () => import("../../../pages/home/home.component.vue"),
} as RouteRecordRaw;
