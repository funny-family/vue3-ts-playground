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
  // {
  //   if (cache[index] != null) {
  //     return cache[index];
  //   }

  //   return (cache[index] = (event: E, ...args: any[]) => handler(event, ...args));
  // };
  cache[index] ||
  (cache[index] = (event: E, ...args: any[]) => handler(event, ...args));

// todo: rename function "withHandlerCache" -> "withCachedHandler"
