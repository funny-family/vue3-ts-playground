import { RouteRecordRaw } from "vue-router";

export default {
  path: "chats",
  component: () => import("../../../../../pages/my/my.component.vue"),
} as RouteRecordRaw;
