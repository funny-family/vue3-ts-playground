import type { ExtractPropTypes } from '@vue/runtime-core';
import type { HTMLAttributes, Prop } from 'vue';
import type { RecordPropsDefinition } from '../../types';

// type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;

// type InferPropType<T> = [T] extends [null]
//   ? any
//   : [T] extends [
//       {
//         type: null | true;
//       }
//     ]
//   ? any
//   : [T] extends [
//       | ObjectConstructor
//       | {
//           type: ObjectConstructor;
//         }
//     ]
//   ? Record<string, any>
//   : [T] extends [
//       | BooleanConstructor
//       | {
//           type: BooleanConstructor;
//         }
//     ]
//   ? boolean
//   : [T] extends [
//       | DateConstructor
//       | {
//           type: DateConstructor;
//         }
//     ]
//   ? Date
//   : [T] extends [
//       | (infer U)[]
//       | {
//           type: (infer U)[];
//         }
//     ]
//   ? U extends DateConstructor
//     ? Date | InferPropType<U>
//     : InferPropType<U>
//   : [T] extends [Prop<infer V, infer D>]
//   ? unknown extends V
//     ? IfAny<V, V, D>
//     : V
//   : T;

// type RequiredKeys<T> = {
//   [K in keyof T]: T[K] extends
//     | {
//         required: true;
//       }
//     | {
//         default: any;
//       }
//     | BooleanConstructor
//     | {
//         type: BooleanConstructor;
//       }
//     ? T[K] extends {
//         default: undefined | (() => undefined);
//       }
//       ? never
//       : K
//     : never;
// }[keyof T];

// type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;

// export declare type ExtractPropTypes1<O> = O extends object
//   ? {
//       [K in RequiredKeys<O>]: InferPropType<O[K]>;
//     } &
//       {
//         [K in keyof O]?: InferPropType<O[K]>;
//       }
//   : {
//       [K in string]: any;
//     };

// export declare type ExtractPropTypes1<O> = {
//   [K in keyof Pick<O, RequiredKeys<O>>]: InferPropType<O[K]>;
// } | {
//   [K in keyof Pick<O, OptionalKeys<O>>]: InferPropType<O[K]>;
// };

export interface Gif404PropFields {
  title: string;
  icon: string;
}

// export const props: ComponentObjectPropsOptions<Gif404PropFields> = {
export const props: RecordPropsDefinition<Gif404PropFields> = {
  icon: {
    default: '11111111',
    required: false,
    type: String
  },

  title: {
    default: '',
    required: true,
    type: String
  }
};

export type Gif404Props = ExtractPropTypes<typeof props>;
// export type Gif404Props = ExtractPropTypes<typeof props> & ThisType<void>;
// export type Gif404Props = ExtractPropTypes1<typeof props>;

// How to use element ref in custom components, especially in tsx?
// https://github.com/vuejs/jsx-next/issues/292

export type Gif404Attrs = HTMLAttributes;
