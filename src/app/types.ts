/* eslint-disable @typescript-eslint/ban-types */
// import type { PropType } from "vue";
import type { Prop } from '@vue/runtime-core';
import { EmitsOptions, ObjectEmitsOptions, Slots } from 'vue';
import * as CSS from 'csstype';

export type Data = Record<string, unknown>;

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

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type EmitFn<
  Options = ObjectEmitsOptions,
  Event extends keyof Options = keyof Options
> = Options extends Array<infer V>
  ? (event: V, ...args: any[]) => void
  : {} extends Options
  ? (event: string, ...args: any[]) => void
  : UnionToIntersection<
      {
        [key in Event]: Options[key] extends (...args: infer Args) => any
          ? (event: key, ...args: Args) => void
          : (event: key, ...args: any[]) => void;
      }[Event]
    >;

export interface SetupCtx<E = EmitsOptions, A = Data> {
  attrs: A;
  slots: Slots;
  emit: EmitFn<E>;
  expose: (exposed?: Record<string, any>) => void;
}

export type EnvironmentVariable = 'production' | 'development';

export interface CSSProperties extends CSS.Properties<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
}
