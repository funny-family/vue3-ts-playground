import type { Prop, SetupContext } from '@vue/runtime-core';
import type { EmitsOptions, HTMLAttributes, Slots } from 'vue';

export type Data = Record<string, unknown>;

export type CSSClassAsString = { class: string | undefined };

export type HTMLAttributesWithoutCSSClass<T = HTMLAttributes> = Omit<
  T,
  'class'
>;

export type RecordPropsDefinition<P = Data> = {
  [K in keyof P]: Prop<P[K]>; // [K in keyof P]: PropValidator<P[K]> | null; <- "null" makes the type work incorrectly
};

// export type CustomSlot<A, T> = ((...args: A[]) => T) | undefined;
export type CustomSlot<A, T> = ((args: A) => T) | undefined;

export type DefaultSlot<T> = {
  default: (() => T) | undefined;
};

export interface SetupCtx<E = EmitsOptions, A = Data, S = Slots>
  extends Omit<SetupContext<E>, 'attrs' | 'slots'> {
  attrs: A;
  slots: S;
}

export type EnvironmentVariable = 'production' | 'development';
