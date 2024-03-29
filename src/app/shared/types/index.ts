import type { Prop, VNode } from 'vue';
import type {
  Booleanish as _Booleanish,
  Numberish as _Numberish
} from '@vue/runtime-dom';

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

/**
 * @example
 * type SomeEvenType = {
 *   onCopy: ((event: ClipboardEvent) => void) | undefined;
 *   onCut: ((event: ClipboardEvent) => void) | undefined;
 *   onPaste: ((event: ClipboardEvent) => void) | undefined;
 * };
 *
 * type SomeEvenTypeAsSingleProperty = SingleProperty<SomeEvenType>;
 * // =============================================================
 * {
 *   onCopy: {
 *       onCopy: ((event: ClipboardEvent) => void) | undefined;
 *   };
 *   onCut: {
 *       onCut: ((event: ClipboardEvent) => void) | undefined;
 *   };
 *   onPaste: {
 *       onPaste: ((event: ClipboardEvent) => void) | undefined;
 *   };
 * }
 * // =============================================================
 */
type SingleProperty<T, K extends keyof T> = K extends any
  ? { [Prop in K]: T[Prop] }
  : never;

/**
 * @example
 * type SomeEvenType = {
 *   onCopy: ((event: ClipboardEvent) => void) | undefined;
 *   onCut: ((event: ClipboardEvent) => void) | undefined;
 *   onPaste: ((event: ClipboardEvent) => void) | undefined;
 * };
 *
 * type SomeEvenTypeAsUnionOfProperties = UnionOfProperties<SomeEvenType>; // type SomeEvenTypeAsUnionOfProperties = "onCopy: ((event: ClipboardEvent) => void) | undefined" | "onCut: ((event: ClipboardEvent) => void) | undefined" | "onPaste: ((event: ClipboardEvent) => void) | undefined"
 */
export type UnionOfProperties<T> = {
  [K in keyof T]: SingleProperty<T, K>;
}[keyof T];

export type RecordOfBoolean<T extends string> = Record<T, boolean>;

/**
 * @see https://stackoverflow.com/questions/53899692/typescript-how-to-extract-only-the-optional-keys-from-a-type
 *
 * @example
 * type User = {
 *   uid: string,
 *   displayName?: string,
 *   bestFriend?: string,
 * };
 *
 * type UserOptionalProperties = OptionalPropertyOf<User> // type UserOptionalProperties = "displayName" | "bestFriend"
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

/**
 * @description
 * Define type for event with generic type.
 *
 * @example
 * const onInput: EventHandler<Event> = (event) => {
 *   ...
 * };
 */
export type EventHandler<E extends Event> = (event: E) => void;

/**
 * @see https://stackoverflow.com/questions/56006111/is-it-possible-to-define-a-non-empty-array-type-in-typescript
 *
 * @description
 * Define an array containing at least one element.
 *
 * @example
 * const okay: NonEmptyArrayO<number> = [1, 2];
 * const alsoOkay: NonEmptyArrayO<number> = [1];
 * const err: NonEmptyArrayO<number> = []; // error!
 */
export type NonEmptyArrayOf<T> = [T, ...T[]];

/**
 * @see https://stackoverflow.com/questions/56006111/is-it-possible-to-define-a-non-empty-array-type-in-typescript
 *
 * @example
 * const x: NonEmpty<string[]> = ['myString'];
 * const err: NonEmpty<string[]> = []; // error!
 */
export type NonEmpty<T> = T extends Array<infer U> ? U[] & { '0': U } : never;

/**
 * @see https://stackoverflow.com/questions/57571664/typescript-type-for-an-object-with-only-one-key-no-union-type-allowed-as-a-key
 */
export type OnlyOneKey<K extends string, V = any> = {
  [P in K]: Record<P, V> & Partial<Record<Exclude<K, P>, never>> extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never;
}[K];

type InArray<T, X> = T extends readonly [X, ...infer _Rest]
  ? true
  : T extends readonly [X]
  ? true
  : T extends readonly [infer _, ...infer Rest]
  ? InArray<Rest, X>
  : false;

/**
 * @see https://stackoverflow.com/questions/57016728/is-there-a-way-to-define-type-for-array-with-unique-items-in-typescript
 * @see https://ja.nsommer.dk/articles/type-checked-unique-arrays.html
 *
 * @description
 * Define type for array with unique items.
 */
export type UniqueArray<T> = T extends readonly [infer X, ...infer Rest]
  ? InArray<Rest, X> extends true
    ? ['Encountered value with duplicates:', X]
    : readonly [X, ...UniqueArray<Rest>]
  : T;

export type Booleanish = _Booleanish;

export type Numberish = _Numberish;

export type AnyFunction<R = unknown> = (...args: any[]) => R;

/**
 * @see https://docs.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone?view=azure-node-latest
 *
 * @description
 * adad
 *
 * @example
 * adad
 */
export type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

/**
 * @see https://docs.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/arrayoneormore?view=azure-node-latest
 *
 * @description
 * adad
 *
 * @example
 * adad
 */
export type ArrayOneOrMore<T> = { 0: T } & Array<T>;

/**
 * @description
 * adad
 *
 * @example
 * adad
 */
export type ConstructorArgs<T> = T extends new (...args: infer U) => any
  ? U
  : never;

/**
 * @see https://stackoverflow.com/questions/59071058/how-to-pick-and-rename-certain-keys-using-typescript
 *
 * @description
 * Rename one key in type.
 *
 * @example
 * interface User {
 *   _id: string;
 *   name: string;
 *   email: string;
 *   password: string;
 *   phone: number;
 * }
 *
 *  type T21 = RenameOneKey<User, "_id", "id"> // same type as above
 *  type T22 = RenameOneKey<User, "foo", "id"> // error, foo is no property
 */
export type RenameOneKey<T, K extends keyof T, R extends PropertyKey> = Omit<
  T,
  K
> &
  { [P in R]: T[K] };

type IsInArray<A extends readonly unknown[], X> = X extends A[number]
  ? true
  : false;

/**
 * @see https://stackoverflow.com/questions/57016728/is-there-a-way-to-define-type-for-array-with-unique-items-in-typescript
 * @see https://www.typescriptlang.org/play?ssl=7&ssc=12&pln=1&pc=1#code/C4TwDgpgBAkgzjAdgQQE6oIYgDzKhAD2AkQBM4pUINSB7RAGxCgFdEBrRWgd0QG0AugBooADQB8UALxj8REuSjI+iFgFsARhFQCoAfijBULaAC4oAMwwM4EANwBYAFChIsOAFVEASwCOJ3DliMgoqGnomVg4uXkFJKWcoJSCFUOo6RmY+b0QLbTERADpinLzUKAAlCDhgAUSk-XckNEwcKpqRCRSQw2MIeobGlQgAN20RAHIAUUQAY1o2YipSKBHrEyhub2AACyhSFjAGb1mMYjhTCc66p0Gk83gvPwD24HEBqHMjE0cnZ1doAAVarAACM0ncT38EGwfAARMg4UI4QAhJFwgDCcIE4jsUAA9PjeiZ-uAgSCAEwQx4+aGwhHotHItE4vGEqDDMaoERwmbzRbaCArNYMDZbXb7Q7HU7nUxIqCo7FAA
 */
export type IsArrayUnique<A extends readonly unknown[]> = A extends readonly [
  infer X,
  ...infer Rest
]
  ? IsInArray<Rest, X> extends true
    ? [never, 'Encountered value with duplicates:', X]
    : IsArrayUnique<Rest>
  : true;

/**
 * @see https://stackoverflow.com/questions/43537520/how-do-i-extract-a-type-from-an-array-in-typescript
 */
export type UnpackedArray<T> = T extends (infer U)[] ? U : T;

/**
 * @see https://stackoverflow.com/questions/48011353/how-to-unwrap-the-type-of-a-promise/49889856
 */
export type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

/**
 * @see https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist
 * @see https://www.typescriptlang.org/play?#code/C4TwDgpgBAShCOBXAlgJwgQWAGQgQwGdgB5AOwgB4AVAGigGkIQCoIAPYCUgExYGsmAewBmUKlAC8UASBFiAfJICwAKCjqoABWQBjPtToBRNjoA2ibpRlzaDJgXnzVGqADIoAb2cuNAbXpQyKR2zAC6ALQA-ABcsAgo6NwU2noGDI5uWniowMh4psm6+rbGZhaUjMx09I5OahoAvv72oaqqQZyowng60ACyXIgAkpwAtp7eucCmELFEqEEA5gDc3jqCo2CC5KTAMVCkiKMARhCoq-VmRfuHJ2cX6rrbc8ALpCuqDW0qoJBQAMKmIrEVD-DZbHbASRxJBoTA4fBEMiUAaHEYQUZ0ADkVz0WKgAB8oDjwdsuMAsXVVOtSEQoAB3ZDAAAWYM2ZN2sUBwNBpMh0K89XUUxmsQARJwiGKaN51Ot2ZDYgBWABMMqFgRp4qepDFn2+NLpjJZ3L0XKBehBbIh5IFsqgItmUAlECl6pcuL4yoALO6NDrtTS9Sovipqds6WdUIJUAB1JnMgByEATZ3NPOtHKhUkFLkd4slwGl9oDzp1wdD4dpUNIgkMqGjcYTACFBCz05beQrbTn7fnnYXixrPT6-XK+eTYirfSWtWWg-qwypDVCozH4yzWyzY8yuMiABKEWPR95UcBO018K0T3Z2jX9l1u+0jqBKmfDm-AcUEZmCRCmbgoFOA4jlOVAoF3dAhxcUsxXLRdvl+aA4FhdAyFMEBkTSSoWHYTgeH4IRRHEKRrGIxQJHtFJiiMExzEsCgyLEap7Ece13A8KB-ECYIcIiGJ7RcFCEggJJqOwtiNRcdxNGyXJ8goOB1lQJJSnoip7GqeQ6EQHgIGEIJRMklwmj4xDzygdDMPIS9r27W8pGEuErKw1FhjGbFPXxIkSXsikqWXCMazrBt1wTFzyFiCKIFsrsbQciZ7yZUUB1dIsxygF8lQAZnfGC5zghcQwNILWFCptNzbZkotIDDkVizN+V7JLpidR90ufC0vVfXKMvleKvx6jLYPg4ql1UAB6CaxGZZAWA6M5ul6BlkFMUwgOgRACFEh1BAdBY9Es2rrJirqsEa20Oj2-JTEERl3igPBgkEY4ACsIB0KFjWZICqvUdpdkWnpoEvNz0XGXMHWSp15iWB5Mq62JbjA+HS1h94LkrQLqwgwgtx+5q82hgs0ugjQsry8nPynSnHgK0asamqBEz2tdwNOHQ8C26B2F6AgWDAaNIByZBXUe9AoG2DCoG4Oabrunb6V3YJZfQT7pcIAhkEWUglke563o+qEgU6fIoCrOkxjADs+DBsZoWZPGqu+JmWbKxsZddMAmWgK3Hs+xAbpAXGADc9eOP6Oa57axAAZUl47pFrekWBZPAoT9ubHoBLq7Yxc3sctg6+CGXZBAwNa7qWfGarqmyursgboSt1QgA
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md
 *
 * @description
 * adad
 *
 * @example
 * adad
 */
export type StartsWith<
  T = string,
  U extends string = string
> = T extends `${U}${any}` ? true : false;

/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
 *
 * @description
 * adad
 *
 * @example
 * adad
 */
export type OmitByType<T, U> = {
  [p in keyof T as T[p] extends U ? never : p]: T[p];
};

/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md
 */
export type DeepReadonly<X> = {
  +readonly [Key in keyof X]: X[Key] extends Record<PropertyKey, unknown>
    ? DeepReadonly<X[Key]>
    : X[Key];
};

/**
 * @see https://stackoverflow.com/questions/53501721/typescript-exclude-property-key-when-starts-with-target-string
 *
 * @description
 * Exclude Property key when starts with target string
 *
 * @example
 * type Origin = {
 *    a: string;
 *    b: string;
 *    _c: string;
 *    _d: string;
 * };
 *
 * type Result = FilterStartsWith<Origin, '_'>; // { _c: string; _d: string; }
 */
export type FilterStartsWith<
  Set,
  Needle extends string
> = Set extends `${Needle}${infer _X}` ? Set : never;

/**
 * @see https://stackoverflow.com/questions/53501721/typescript-exclude-property-key-when-starts-with-target-string
 *
 * @description
 * Exclude Property key when starts with target string
 *
 * @example
 * type Origin = {
 *    a: string;
 *    b: string;
 *    _c: string;
 *    _d: string;
 * };
 *
 * type Result = FilterNotStartingWith<Origin, '_'>; // { a: string; b: string; }
 */
export type FilterNotStartingWith<
  Set,
  Needle extends string
> = Set extends `${Needle}${infer _X}` ? never : Set;

export type JSXElement =
  | JSX.Element
  | string
  | number
  | Symbol
  | JSXElement[]
  | VNode[];
