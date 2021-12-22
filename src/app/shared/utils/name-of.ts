/* eslint-disable no-useless-escape */

// /function{return(.+)(;?)}/

// https://mothereff.in/js-variables

/**
 * @see https://stackoverflow.com/questions/4602141/variable-name-as-a-string-in-javascript
 *
 * @description
 * Get name of variable in string format.
 *
 * @example
 * const emptyString = '';
 * const nameOfEmptyStringVariable = nameOf(() => emptyString);
 * console.log(nameOfEmptyStringVariable); // emptyString
 */
export const nameOf = (callback: Function) =>
  callback
    .toString()
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/[ |\(\)=>]/g, '')

    .replace(/function{return/g, '')
    .replace(/(;?)}/g, '');
