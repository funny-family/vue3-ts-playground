interface TernaryObject<T, F> {
  condition: boolean;
  onTruthy: () => T;
  onFalsy: () => F;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 *
 * @description
 * Functional abstraction for ternary operator.
 *
 * @example
 * const result = callTernary({
 *    condition: this.counter % 2 === 0, // this.counter === 4
 *    onTruthy: () => 'even number!',
 *    onFalsy: () => 'odd number!'
 * })
 *
 * console.log(result); // "even number!"
 */
export const callTernary = <T, F>({
  condition,
  onTruthy,
  onFalsy
}: TernaryObject<T, F>) => (condition ? onTruthy() : onFalsy());
