import { RouteRecordRaw } from "vue-router";

export default {
  path: "profile",
  name: "",
  component: () => import("../../../../../pages/my/children/profile/profile.component.vue"),
} as RouteRecordRaw;
