import type { VNode } from 'vue';

// https://github.com/microsoft/TypeScript/issues/23182 -> "[TArgs] extends [never]"
export type CustomSlot<TArgs = never, TReturn = VNode[]> = [TArgs] extends [
  never
]
  ? () => TReturn
  : (args: TArgs) => TReturn;

export type DefaultSlot<TArgs, TReturn> = {
  default: CustomSlot<TArgs, TReturn>;
};
