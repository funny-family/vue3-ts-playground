import { createRouter, createWebHistory, RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import { routes } from "./routes";

console.log("routes:", routes);

// const h1 = import("../pages/home/home.index").then(({ Home }) => ({ default: Home }));
// console.log("Home  (export):", h1);

// const h2 = import("../pages/home/home.component.vue");
// console.log("Home (defalut export):", h2);

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // routes,
  routes: [
    {
      path: "/404",
      name: "notFound",
      component: () => import("../pages/not-found/not-found.component"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../pages/home/home.component.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/about/about.component.vue"),
    },
    {
      path: "/my",
      name: "my",
      component: () => import("../pages/my/my.component.vue"),
      children: [
        {
          path: "chats",
          name: "chats",
          component: () => import("../pages/my/children/chats/chats.component.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("../pages/my/children/profile/profile.component.vue"),
        },
      ],
    },
  ],
});

// type R = RouteRecordNormalized[] | RouteRecordRaw[];

// router

// export const flattenRoutes = (routes: R): R => {
//   const flatRoutes = routes
//     .map((route: any) => [route?.children ? flattenRoutes(route?.children) : [], route])
//     .flat(Infinity);

//   return flatRoutes as R;
// };

console.log('getRoutes:', router.getRoutes());
