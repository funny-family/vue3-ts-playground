import type { ExtractPropTypes } from '@vue/runtime-core';
import type { IfAny } from '@vue/shared';
import type { HTMLAttributes, Prop, PropType } from 'vue';
import type { RecordPropsDefinition } from '../../types';

type Data = Record<string, unknown>;

type DefaultFactory<T> = (props: Data) => T | null | undefined;

// type PropMethod<T, TConstructor = any> = [T] extends [
//   ((...args: any) => any) | undefined
//   ] ? {
//       new (): TConstructor;
//       (): T;
//       readonly prototype: TConstructor;
//   } : never;

// type PropConstructor<T = any> = {
//   new (...args: any[]): T & {};
// } | {
//   (): T;
// } | PropMethod<T>;


type PropOption<
  TypeValue extends any,
  RequiredValue extends boolean,
  DefaultValue extends TypeValue,
  ValidatorFunction = (value: unknown) => boolean
> = {
  type: PropType<TypeValue> | true | null;
  required: RequiredValue;
  default: DefaultValue | DefaultFactory<DefaultValue> | undefined | object;
  validator?: ValidatorFunction;
};

interface Gif404PropSchema {
  icon: PropOption<string, false, ''>;
  text: PropOption<string, true, ''>;
}

const p: Gif404PropSchema = {
  icon: {
    default: () => '11111111',
    required: false,
    type: String
  },

  text: {
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

type InferPropType<T> = [T] extends [null] ? any : [T] extends [{
  type: null | true;
}] ? any : [T] extends [ObjectConstructor | {
  type: ObjectConstructor;
}] ? Record<string, any> : [T] extends [BooleanConstructor | {
  type: BooleanConstructor;
}] ? boolean : [T] extends [DateConstructor | {
  type: DateConstructor;
}] ? Date : [T] extends [(infer U)[] | {
  type: (infer U)[];
}] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? IfAny<V, V, D> : V : T;

//  =================================================================


type PropRequireKey<T> = {
  [K in keyof T]: T[K] extends { required: true } ? K : never;
}[keyof T];

type PropOptionalKey<T> = Exclude<keyof T, PropRequireKey<T>>;

// type ExtractTypeFromProps<T> = {
//   [K in PropRequireKey<T>]: InferPropType<T[K]>;
// } &
//   {
//     [K in PropOptionalKey<T>]?: InferPropType<T[K]>;
//   };

type ExtractTypeFromProps<O> = O extends object
  ? { [K in keyof O]?: unknown } & // This is needed to keep the relation between the option prop and the props, allowing to use ctrl+click to navigate to the prop options. see: #3656
      { [K in PropRequireKey<O>]: InferPropType<O[K]> } &
      { [K in PropOptionalKey<O>]?: InferPropType<O[K]> }
  : O extends undefined
  ? {}
  : { [K in string]: any }

// YEAH!!! DAT SHIIIT WOORK!
type TheRealPropType = ExtractTypeFromProps<Gif404PropSchema>;

export type Gif404Props = ExtractTypeFromProps<Gif404PropSchema>;
// export type Gif404Props = ExtractPropTypes<typeof props> & ThisType<void>;
// export type Gif404Props = ExtractPropTypes1<typeof props>;

// How to use element ref in custom components, especially in tsx?
// https://github.com/vuejs/jsx-next/issues/292

export type Gif404Attrs = HTMLAttributes;
