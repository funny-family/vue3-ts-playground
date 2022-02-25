// variable name regexp (https://mothereff.in/js-variables)
// ^([a-zA-Z_$][a-zA-Z\\d_$]*)$

/*
  /(((\b(function)\b)((\s|\t)*)?)(\(\)))|(((\s|\t)*)?(\{|\})((\n|\r)?))|(((\s|\t)*)?(\b(return)\b)((\s|\t)*)?)|(((\s|\t)*)?\;?((\s|\t)*)?)|(((\s|\t)*)?\})/g
  this regexp match all except "Test"

  example:

  function() {
    return Test;
  }
*/

/*
  /(\()(\))((\s?)*)(\=\>)((\s?)*)/g" or "/[ |\(\)=>]/g"
  this regexp match all except "Test"

  example:

  () => Test
*/

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
    .replace(
      /*
      combination of
      "(((\b(function)\b)((\s|\t)*)?)(\(\)))|(((\s|\t)*)?(\{|\})((\n|\r)?))|(((\s|\t)*)?(\b(return)\b)((\s|\t)*)?)|(((\s|\t)*)?\;?((\s|\t)*)?)|(((\s|\t)*)?\})"
      and
      "(\()(\))((\s?)*)(\=\>)((\s?)*)"
    */
      /((\()(\))((\s?)*)(\=\>)((\s?)*)|(((\b(function)\b)((\s|\t)*)?)(\(\)))|(((\s|\t)*)?(\{|\})((\n|\r)?))|(((\s|\t)*)?(\b(return)\b)((\s|\t)*)?)|(((\s|\t)*)?\;?((\s|\t)*)?)|(((\s|\t)*)?\}))/g,
      ''
    )
    .replace(/((.*)(\.))(?:)/g, '');
