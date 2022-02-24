/* eslint-disable @typescript-eslint/ban-types */
// import { createStore } from "vuex";
// import { modules } from "./modules";

// const devtools = process.env.NODE_ENV === "production" ? false : true;
// const strict = true;

// export const store = createStore({
//   devtools,
//   strict,
//   modules,
// });

// https://www.npmjs.com/package/pinia (store to replace vuex!)

// https://dev.to/3vilarthas/vuex-typescript-m4j
// https://soshace.com/building-web-apps-with-vue-3-composition-api-typescript-vuex4-0/ !!!
// https://dev.to/shubhadip/vue-3-vuex-4-modules-typescript-2i2o

import { createPinia, defineStore } from 'pinia';

export const store = createPinia();

export const rootStoreId = 'root';
export const useRootStore = defineStore(rootStoreId, {
  state: () => ({
    counter: 0,
    name: 'Eduardo'
  }),

  // optional getters
  getters: {
    doubleCount(): number {
      return this.counter * 2;
    },
    // use getters in other getters
    doubleCountPlusOne(): number {
      return this.doubleCount * 2 + 1;
    }
  },

  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
    }
  }
});
