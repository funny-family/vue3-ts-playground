interface TernaryObject<I, E> {
  condition: boolean;
  onTruthy : () => I | void;
  onFalsy: () => E | void;
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
export const callTernary = <I, E>({
  condition,
  onTruthy,
  onFalsy
}: TernaryObject<I, E>) => (condition ? onTruthy() : onFalsy());
