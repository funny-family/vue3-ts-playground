import type { DeepReadonly } from '@/app/shared/types';

/**
 * @description
 * Allow to transform return values of "storeSetup" function into read-only.
 *
 * @example
 * export const useCounterStore = defineStore(
 *   id,
 *   storeSetup as ReadonlyStoreSetup<typeof storeSetup>
 * );
 */
export type ReadonlyStoreSetup<Fn extends (...args: any) => any> =
  () => DeepReadonly<ReturnType<Fn>>;
