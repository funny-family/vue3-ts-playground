interface TernaryObject<T, F> {
  condition: boolean;
  onTruthy : () => T | void;
  onFalsy: () => F | void;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 *
 * @description
 * Functional abstraction for ternary operator.
 *
 * @example
 * callTernary({
 *    condition: this.counter % 2 === 0,
 *    onTruthy: () => 'even number!',
 *    onFalsy: () => 'odd number!'
 * })
 */
export const callTernary = <T, F>({
  condition,
  onTruthy,
  onFalsy
}: TernaryObject<T, F>) => (condition ? onTruthy() : onFalsy());
