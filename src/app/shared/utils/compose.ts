/**
 * @see https://dev.to/ascorbic/creating-a-typed-compose-function-in-typescript-3-351i
 * @see https://stackoverflow.com/questions/49310886/typing-compose-function-in-typescript-flow-compose
 *
 * @description
 * adad
 *
 * @example
 * adadad
 */
export const compose = <R>(
  firstFunction: (args: R) => R,
  ...functions: Array<(args: R) => R>
) =>
  functions.reduce(
    (previousFunction, nextFunction) => (value) =>
      previousFunction(nextFunction(value)),
    firstFunction
  );
