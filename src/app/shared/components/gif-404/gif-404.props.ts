import type { ExtractPropTypes } from '@vue/runtime-core';
import type { HTMLAttributes, Prop, PropType } from 'vue';
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

// type PropSchema<DefaultValue, RequiredValue, TypeValue, ValidatorFunction = (value: unknown) => boolean> = {};

type Data = Record<string, unknown>;

type DefaultFactory<T> = (props: Data) => T | null | undefined;

type PropOption<
  TypeValue,
  RequiredValue extends boolean,
  DefaultValue,
  ValidatorFunction = (value: unknown) => boolean
> = {
  type: PropType<TypeValue> | true | null;
  required: RequiredValue;
  default: DefaultValue | DefaultFactory<DefaultValue> | undefined | object;
  validator?: ValidatorFunction;
};

interface PropSchema {
  icon: PropOption<String, false, ''>;
  title: PropOption<String, true, ''>;
}

const p: PropSchema = {
  icon: {
    default: () => '11111111',
    required: false,
    type: String
  },

  title: {
    default: '',
    required: true,
    type: String
  }
};

type PPP = typeof p;

export interface Gif404PropFields {
  title: string;
  icon: string;
}

// export const props: ComponentObjectPropsOptions<Gif404PropFields> = {
export const props: RecordPropsDefinition<Gif404PropFields> = {
  // export const props = {
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

//  =================================================================

// type RequiredKeys<T> = {
//   [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
// }[keyof T];
// type OptionalKeys<T> = {
//   [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
// }[keyof T];

//  =================================================================

// not cool!
type Prp = typeof props;

type ReqKey<T> = {
  [K in keyof T]: T[K] extends { required: true } ? K : never;
}[keyof T];

// type OptKey<T> = {
//   [K in keyof T]: T[K] extends { required: false } ? K : never;
// }[keyof T];

type OptKey<T> = Exclude<keyof T, ReqKey<T>>;

type PropTypeField<T> = {
  // [K in keyof T]: T['type'];
};

type ExtractTypeFromProps<T> = {
  [K in ReqKey<T>]: unknown;
} &
  {
    [K in OptKey<T>]?: unknown;
  };

type P = ExtractTypeFromProps<PropSchema>;

export type Gif404Props = ExtractPropTypes<typeof props>;
// export type Gif404Props = ExtractPropTypes<typeof props> & ThisType<void>;
// export type Gif404Props = ExtractPropTypes1<typeof props>;

// How to use element ref in custom components, especially in tsx?
// https://github.com/vuejs/jsx-next/issues/292

export type Gif404Attrs = HTMLAttributes;
