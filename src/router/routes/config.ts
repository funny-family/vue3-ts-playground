import type { RouteRecordRaw } from "vue-router";

export const config = {
  my: {
    path: "/my",
    get name() {
      const name = this.path.split('/').join('');

      return name;
    },
    component: () => import("../../../pages/my/my.component.vue"),
  } as RouteRecordRaw
};
