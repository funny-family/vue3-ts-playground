import { storeId } from './../index';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

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
