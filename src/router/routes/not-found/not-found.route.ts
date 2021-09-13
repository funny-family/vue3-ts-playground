import { RouteRecordRaw } from "vue-router";

export default {
  path: "/404",
  name: "",
  component: () => import("../../../pages/not-found/not-found.component"),
} as RouteRecordRaw;
