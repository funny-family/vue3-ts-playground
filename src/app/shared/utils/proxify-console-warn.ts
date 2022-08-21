/**
 * @see https://stackoverflow.com/questions/9216441/intercept-calls-to-console-log-in-chrome
 *
 * @description
 * adadadadadad
 *
 * @example
 * adadadadadad
 */
export const proxifyConsoleWarn = (): void => {
  const consoleWarn = console.warn.bind(console);
  console.warn = (...args: any[]) => {
    if (
      Array.isArray(args) &&
      typeof args[0] === 'string' &&
      (args[0] as string).startsWith('[Vue warn]')
    ) {
      throw new Error(...args);
    }

    consoleWarn(...args);
  };
};
