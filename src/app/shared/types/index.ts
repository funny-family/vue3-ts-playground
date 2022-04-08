import type { Prop } from 'vue';

export type Data<T = unknown> = Record<string, T>;

export type DefaultFactory<T> = (props: Data) => T | null | undefined;

export type RecordPropsDefinition<P = Data> = {
  [K in keyof P]: Prop<P[K]>; // [K in keyof P]: PropValidator<P[K]> | null; <- "null" makes the type work incorrectly
};

export type EnvironmentVariable = 'production' | 'development';

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

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

export type RecordOfBoolean<T extends string> = Record<T, boolean>;

/**
 * @see https://stackoverflow.com/questions/53899692/typescript-how-to-extract-only-the-optional-keys-from-a-type
 */
export type OptionalPropertyOf<T extends object> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K;
  }[keyof T],
  undefined
>;

/**
 * @example
 * type T1 = {
 *   value1: any;
 * };
 *
 * type T2 = {
 *   value2: any;
 * };
 *
 * type T3 = ExtractedKeys<T1 & T2>; // type T3 = "value1" | "value2"
 */
export type ExtractedKeys<T> = keyof T;

/**
 * @example
 * const f1: FunctionWithZeroArguments = () => {
 *    console.log('well... nothing to return...');
 * };
 *
 * const f2: FunctionWithZeroArguments<string> = () => {
 *    return 'I am a string!!!';
 * };
 */
export type FunctionWithZeroArguments<T = void> = () => T;
