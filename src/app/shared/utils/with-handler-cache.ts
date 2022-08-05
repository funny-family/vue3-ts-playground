import type { EventHandler } from '@/app/shared/types';

/**
 * @see https://dev.to/sharvilak11/vue-3-optimization-via-cached-handlers-2e1j
 *
 * @description
 * adad
 *
 * @example
 * adad
 */
export const withHandlerCache = <E extends Event>(
  handler: (event: E, ...args: any[]) => void,
  cache: any[],
  index: number
): EventHandler<E> =>
  cache[index] ||
  (cache[index] = (event: E, ...args: any[]) => handler(event, ...args));

// export const withHandlerCache = <E extends Event>(
//   handler: (event: E, ...args: any[]) => void,
//   cache: any[],
//   index: number
// ): EventHandler<E> => {
//   if (cache[index] != null) {
//     return cache[index];
//   }

//   const cachedHandler = (event: E, ...args: any[]) => handler(event, ...args);
//   cache[index] = cachedHandler;

//   return cache[index];

//   // cache[index] ||
//   // (cache[index] = (event: E, ...args: any[]) => handler(event, ...args));
// };

// export const withHandlerCache = <E extends Event>(
//   handler: (event: E) => void,
//   cache: any[],
//   index: number
// ): EventHandler<E> =>
//   cache[index] || (cache[index] = (event: E) => handler(event));

// todo: rename function "withHandlerCache" -> "withCachedHandler"
