/**
 * @see https://iqcode.com/code/javascript/how-to-find-if-given-character-in-a-string-is-uppercase-or-lowercase-in-javascript
 * @see https://www.codegrepper.com/code-examples/javascript/javascript+check+if+string+contains+capital+letter
 *
 * @description
 * adadadad
 *
 * @example
 * adada
 */
export const isCapitalized = (string: string): boolean =>
  /^[A-Z]/g.test(string);

// export const isCapitalized = (string: string): boolean =>
//   string.charAt(0) === string.charAt(0).toUpperCase();
