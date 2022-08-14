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

import { createPinia, defineStore, StoreDefinition } from 'pinia';
import type { DefineSetupStoreOptions } from 'pinia';
import type {
  _ExtractActionsFromSetupStore,
  _ExtractGettersFromSetupStore,
  _ExtractStateFromSetupStore
} from './types';

export const store = createPinia();

/**
 * Creates a "readonly" `useStore` function that retrieves the store instance
 *
 * @param id - id of the store (must be unique)
 * @param storeSetup - function that defines the store
 * @param options - extra options
 */
export const defineReadOnlyStore = defineStore as <Id extends string, SS>(
  id: Id,
  storeSetup: () => SS,
  options?: DefineSetupStoreOptions<
    Id,
    _ExtractStateFromSetupStore<SS>,
    _ExtractGettersFromSetupStore<SS>,
    _ExtractActionsFromSetupStore<SS>
  >
) => StoreDefinition<
  Id,
  Readonly<_ExtractStateFromSetupStore<SS>>,
  Readonly<_ExtractGettersFromSetupStore<SS>>,
  Readonly<_ExtractActionsFromSetupStore<SS>>
>;
