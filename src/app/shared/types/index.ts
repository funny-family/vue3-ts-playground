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

// export type GetValues<T, K extends readonly (keyof T)[]> = {
//   (object: T, keys: K): T[K[number]][];
// };

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

export type DefaultEmit = (event: Event) => void;
