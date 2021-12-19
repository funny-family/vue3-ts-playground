import type { Prop, SetupContext } from '@vue/runtime-core';
import type {
  EmitsOptions,
  HTMLAttributes,
  ObjectEmitsOptions,
  Slots
} from 'vue';

export type Data = Record<string, unknown>;

export type CSSClassAttribute = { class?: string | undefined };

export type HTMLAttributesWithoutCSSClass<T = HTMLAttributes> = Omit<
  T,
  'class'
>;

export type RecordPropsDefinition<P = Data> = {
  [K in keyof P]: Prop<P[K]>; // [K in keyof P]: PropValidator<P[K]> | null; <- "null" makes the type work incorrectly
};

export type CustomSlot<A, T> = ((args: A) => T) | undefined;

export type EnvironmentVariable = 'production' | 'development';

export type EmitsToProps<T extends EmitsOptions> = T extends string[]
  ? {
      [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => void;
    }
  : T extends ObjectEmitsOptions
  ? {
      [K in string &
        `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}`
        ? T[Uncapitalize<C>] extends null
          ? (...args: any[]) => void
          : (
              ...args: T[Uncapitalize<C>] extends (...args: infer P) => void
                ? P
                : never
            ) => void
        : never;
    }
  : {};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type EmitFunction<
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

export type DefaultEmit = (event: Event) => void;

export interface SetupCtx<E = EmitsOptions, A = Data, S = Slots>
  extends Omit<SetupContext<E>, 'attrs' | 'slots' | 'emit'> {
  attrs: A;
  slots: S;
  emit: EmitFunction<E>;
}
