/* eslint-disable @typescript-eslint/ban-types */
// import type { PropType } from "vue";
import type { Prop } from '@vue/runtime-core';

type Data = Record<string, unknown>;

// type DefaultFactory<T> = (props: Data) => T | null | undefined;

// interface PropOptions<T = any, D = T> {
//   type?: PropType<T> | true | null;
//   required?: boolean;
//   default?: D | DefaultFactory<D> | null | undefined | object;
//   validator?(value: unknown): boolean;
// }

// type PropValidator<T, D = T> = PropOptions<T, D> | PropType<T>;

export type RecordPropsDefinition<P = Data> = {
  [K in keyof P]: Prop<P[K]>; // [K in keyof P]: PropValidator<P[K]> | null; <- null makes error
};

export type EnvironmentVariable = 'production' | 'development';
