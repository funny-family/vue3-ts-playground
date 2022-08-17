/**
 * @see https://stackoverflow.com/questions/36622064/check-the-array-has-empty-element-or-not
 *
 * @description
 * adadadadda
 *
 * @example
 * adadad
 */
export const isArrayIncludesEmptyElement = <T extends Array<any>>(
  array: T
): boolean => array.includes(undefined);
