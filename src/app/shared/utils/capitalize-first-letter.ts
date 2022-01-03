/**
 * @description
 * Capitalize first letter in a string.
 *
 * @example
 * const string = 'hello';
 * const capitalizedString = capitalizeFirstLetter(string);
 * console.log(capitalizedString); // 'Hello'
 */
export const capitalizeFirstLetter = <T extends string>(
  string: T
): Capitalize<T> =>
  (string.charAt(0).toUpperCase() + string.slice(1)) as Capitalize<T>;
