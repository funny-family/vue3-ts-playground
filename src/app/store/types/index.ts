import type { ComputedRef, UnwrapRef } from 'vue';

/**
 * Generic type for a function that can infer arguments and return type
 *
 * @description
 * From "pinia" package.
 *
 * @internal
 */
type _Method = (...args: any[]) => any;

/**
 * @description
 * From "pinia" package.
 *
 * @internal
 */
export type _ExtractActionsFromSetupStore<SS> = SS extends undefined | void
  ? {}
  : {
      [K in keyof SS as SS[K] extends _Method ? K : never]: SS[K];
    };

/**
 * @description
 * From "pinia" package.
 *
 * @internal
 */
export type _ExtractGettersFromSetupStore<SS> = SS extends undefined | void
  ? {}
  : {
      [K in keyof SS as SS[K] extends ComputedRef ? K : never]: UnwrapRef<
        SS[K]
      >;
    };

/**
 * @description
 * From "pinia" package.
 *
 * @internal
 */
export type _ExtractStateFromSetupStore<SS> = SS extends undefined | void
  ? {}
  : {
      [K in keyof SS as SS[K] extends _Method | ComputedRef
        ? never
        : K]: UnwrapRef<SS[K]>;
    };
