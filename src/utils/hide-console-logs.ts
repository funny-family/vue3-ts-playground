/* eslint-disable @typescript-eslint/no-empty-function */

export const hideConsoleLogs = () => {
  console.assert = () => {};
  console.clear = () => {};
  console.count = () => {};
  console.countReset = () => {};
  console.debug = () => {};
  console.dir = () => {};
  console.dirxml = () => {};
  console.error = () => {};
  console.group = () => {};
  console.groupCollapsed = () => {};
  console.groupEnd = () => {};
  console.info = () => {};
  console.log = () => {};
  console.table = () => {};
  console.time = () => {};
  console.timeEnd = () => {};
  console.timeLog = () => {};
  console.trace = () => {};
  console.warn = () => {};
  console.profile = () => {};
  console.profileEnd = () => {};
  console.timeStamp = () => {};
};
