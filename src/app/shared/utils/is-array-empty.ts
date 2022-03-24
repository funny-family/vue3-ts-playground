/**
 * @description
 * Check if array is empty.
 *
 * @example
 * const someKindOfArray = [];
 * const isSomeKindOfArrayEmpty = isArrayEmpty(someKindOfArray);
 * console.log(isSomeKindOfArrayEmpty); // true
 */
export const isArrayEmpty = <T>(array: T[]): boolean => array.length === 0;
