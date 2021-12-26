/**
 * @description
 * Capitalize first letter in a string.
 *
 * @example
 * const string = 'hello';
 * const capitalizedString = capitalizeFirstLetter(string);
 * console.log(capitalizedString); // 'Hello'
 */
export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);
