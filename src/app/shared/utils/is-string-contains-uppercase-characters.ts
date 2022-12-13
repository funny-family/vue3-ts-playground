/**
 * @see https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
 * @see https://stackoverflow.com/a/69874941
 *
 * @description
 * adada
 *
 * @example
 * adad
 */
export const isStringContainsUppercaseCharacters = (string: string): boolean =>
  /\p{Lu}/u.test(string);
