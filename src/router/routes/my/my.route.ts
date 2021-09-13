import { RouteRecordRaw } from "vue-router";
import { names } from "../names"

export default {
  path: "/my",
  name: names.my,
  component: () => import("../../../pages/my/my.component.vue"),
} as RouteRecordRaw;
