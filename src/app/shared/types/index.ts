import type { Prop, SetupContext } from '@vue/runtime-core';
import type { EmitsOptions, Slots } from 'vue';

export type Data = Record<string, unknown>;

// interface PropOptions<T = any, D = T> {
//   type?: PropType<T> | true | null;
//   required?: boolean;
//   default?: D | DefaultFactory<D> | null | undefined | object;
//   validator?(value: unknown): boolean;
// }

export type RecordPropsDefinition<P = Data> = {
  [K in keyof P]: Prop<P[K]>; // [K in keyof P]: PropValidator<P[K]> | null; <- "null" makes the type work incorrectly
};

export interface SetupCtx<E = EmitsOptions, A = Data, S = Slots>
  extends Omit<SetupContext<E>, 'attrs' | 'slots'> {
  attrs: A;
  slots: S;
}

export type EnvironmentVariable = 'production' | 'development';
