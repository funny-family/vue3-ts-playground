export type CustomSlot<A, T> = A extends object
  ? ((args: A) => T) | undefined
  : (() => T) | undefined;

export type DefaultSlot<T, A = undefined> = {
  default: CustomSlot<A, T>;
};
