/**
 * @see https://iqcode.com/code/javascript/javascript-check-if-string-contains-capital-letter
 *
 * @description
 * Check if all string characters is in uppercase.
 *
 * @example
 * const upperCasedString = 'HELLO!';
 * const isStringUpperCased = isUpperCased(upperCasedString);
 * console.log(isStringUpperCased); // true
 */
export const isUpperCased = (string: string): boolean =>
  /^\b[A-Z]*\b/g.test(string);
