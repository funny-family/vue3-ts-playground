export type CustomSlot<A, T> = A extends undefined
  ? (() => T) | undefined
  : ((args: A) => T) | undefined;

export type DefaultSlot<T, A = undefined> = {
  default: CustomSlot<A, T>;
};
