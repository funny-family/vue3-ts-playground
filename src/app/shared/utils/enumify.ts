import type { Keys } from '@/app/shared/types';

/**
 * @description
 * Creates an object with the same key and value from an array of strings.
 *
 * @example
 * const emits = ['input', 'change', 'update'];
 * const emitName = enumify(emits);
 * console.log(emitName); // { input: 'input', change: 'change', update: 'update' }
 */
export const enumify = <K extends string>(keyList: K[]): Keys<K> =>
  keyList.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = currentValue;

    return accumulator;
  }, {} as Keys<K>);
