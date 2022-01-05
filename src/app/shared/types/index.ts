import type { Prop, SetupContext } from '@vue/runtime-core';
import type {
  EmitsOptions,
  HTMLAttributes,
  ObjectEmitsOptions,
  Slots
} from 'vue';

type Data = Record<string, unknown>;

export type CSSClassAttribute = { class?: string | undefined };

export type HTMLAttributesWithoutCSSClass<T = HTMLAttributes> = Omit<
  T,
  'class'
>;

export type RecordPropsDefinition<P = Data> = {
  [K in keyof P]: Prop<P[K]>; // [K in keyof P]: PropValidator<P[K]> | null; <- "null" makes the type work incorrectly
};

export type CustomSlot<A, T> = A extends object
  ? ((args: A) => T) | undefined
  : (() => T) | undefined;

export type DefaultSlot<T, A = undefined> = {
  default: CustomSlot<A, T>;
};

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

export type EmitValidationFunction<A = undefined> = A extends undefined
  ? () => boolean
  : (args: A) => boolean;

export interface SetupCtx<E = EmitsOptions, A = Data, S = Slots>
  extends Omit<SetupContext<E>, 'attrs' | 'slots' | 'emit'> {
  attrs: A;
  slots: S;
  emit: EmitFunction<E>;
}

export type Keys<T extends string> = {
  [K in T]: K;
};

export type KeyToKeyMapping<Keys extends PropertyKey> = { [K in Keys]: K };

export type Writeable<T extends { [x: string]: any }, K extends string> = {
  [P in K]: T[P];
};

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type SingleProperty<T, K extends keyof T> = K extends any
  ? { [Prop in K]: T[Prop] }
  : never;

export type UnionOfProperties<T> = {
  [K in keyof T]: SingleProperty<T, K>;
}[keyof T];
