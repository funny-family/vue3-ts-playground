/* eslint-disable no-useless-escape, @typescript-eslint/ban-types */
/**
 * @see https://stackoverflow.com/questions/4602141/variable-name-as-a-string-in-javascript
 */
export const nameOf = (callback: Function) => callback.toString().replace(/[ |\(\)=>]/g, '');
