import { storeId } from './../index';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { ReadonlyStoreSetup } from './types';

// export const id = 'counter' as const;
// const storeSetup = () => {
//   const counter = ref(0);
//   const doubleCounter = computed(() => counter.value * 2);

//   const increment = () => {
//     counter.value++;
//   };

//   return {
//     counter,
//     doubleCounter,
//     increment
//   };
// };

// export const useCounterStore = defineStore(
//   id,
//   storeSetup as ReadonlyStoreSetup<typeof storeSetup>
// );

export const useCounterStore = defineStore(storeId.counter, () => {
  const counter = ref(0);
  const doubleCounter = computed(() => counter.value * 2);

  const increment = () => {
    counter.value++;
  };

  return {
    counter,
    doubleCounter,
    increment
  } as const;
});
