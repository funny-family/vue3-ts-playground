import { computed, ref } from 'vue';
import { defineReadOnlyStore } from '@/app/store';

export const counterStoreId = 'counter' as const;
export const useCounterStore = defineReadOnlyStore(counterStoreId, () => {
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
