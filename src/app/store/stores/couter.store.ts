import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const counterStoreId = 'counter' as const;
export const useCounterStore = defineStore(counterStoreId, () => {
  const counter = ref(0);
  const doubleCounter = computed(() => counter.value * 2);

  const increment = () => {
    counter.value++;
  };

  return {
    counter,
    doubleCounter,
    increment
  };
});
