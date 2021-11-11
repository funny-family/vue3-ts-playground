/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/ban-ts-comment */

export const hideConsoleLogs = (): void => {
  const consoleObject = window.console;

  if (!consoleObject) return;

  for (const functionName in consoleObject) {
    // @ts-ignore
    consoleObject[functionName] = () => {};
  }
};
