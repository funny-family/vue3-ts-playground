import type { EmitsOptions, ObjectEmitsOptions } from 'vue';
import type { UnionToIntersection } from './../index';

export type EmitFunction<
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
