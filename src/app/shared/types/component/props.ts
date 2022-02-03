import type { IfAny } from '@vue/shared';
import type { Prop, PropType } from 'vue';
import type { DefaultFactory } from '../index';

export type PropOption<
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

type InferPropType<T> = [T] extends [null]
  ? any
  : [T] extends [
      {
        type: null | true;
      }
    ]
  ? any
  : [T] extends [
      | ObjectConstructor
      | {
          type: ObjectConstructor;
        }
    ]
  ? Record<string, any>
  : [T] extends [
      | BooleanConstructor
      | {
          type: BooleanConstructor;
        }
    ]
  ? boolean
  : [T] extends [
      | DateConstructor
      | {
          type: DateConstructor;
        }
    ]
  ? Date
  : [T] extends [
      | (infer U)[]
      | {
          type: (infer U)[];
        }
    ]
  ? U extends DateConstructor
    ? Date | InferPropType<U>
    : InferPropType<U>
  : [T] extends [Prop<infer V, infer D>]
  ? unknown extends V
    ? IfAny<V, V, D>
    : V
  : T;

type PropRequireKey<T> = {
  [K in keyof T]: T[K] extends { required: true } ? K : never;
}[keyof T];

type PropOptionalKey<T> = Exclude<keyof T, PropRequireKey<T>>;

export type ExtractTypeFromProps<O> = O extends object
  ? { [K in keyof O]?: unknown } & // This is needed to keep the relation between the option prop and the props, allowing to use ctrl+click to navigate to the prop options. see: #3656
      { [K in PropRequireKey<O>]: InferPropType<O[K]> } &
      { [K in PropOptionalKey<O>]?: InferPropType<O[K]> }
  : O extends undefined
  ? {}
  : { [K in string]: any };
