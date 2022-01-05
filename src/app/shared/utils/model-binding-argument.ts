import type { Prop } from 'vue';
import { capitalize } from './capitalize';

type NameOfUpdateValueFunction = 'update';
type PropName<T extends string> = T;
type EmitName<T extends string> = `${NameOfUpdateValueFunction}:${T}`;
type NormalizedEmitName<T extends string> =
  `${NameOfUpdateValueFunction}${Capitalize<T>}`;

export class VModelBindingArgument<
  Name extends string,
  DefaultValue extends string | boolean
> {
  private readonly name: Name;
  private readonly defaultValue: DefaultValue;
  private readonly nameOfUpdateValueFunction: NameOfUpdateValueFunction =
    'update';

  constructor(name: Name, defaultValue: DefaultValue) {
    this.name = name;
    this.defaultValue = defaultValue;
  }

  get propName(): PropName<Name> {
    return this.name;
  }

  get emitName(): EmitName<Name> {
    return `${this.nameOfUpdateValueFunction}:${this.name}` as const;
  }

  get normalizedEmitName(): NormalizedEmitName<Name> {
    return `${this.nameOfUpdateValueFunction}${capitalize(this.name)}` as const;
  }

  get propObject(): Prop<DefaultValue> {
    return {
      type:
        typeof this.defaultValue === 'string'
          ? String
          : typeof this.defaultValue === 'boolean'
          ? Boolean
          : null,
      required: false,
      default: this.defaultValue
    } as Prop<DefaultValue>;
  }
}

// default values
export type DefaultNameOfBindingArgument = 'modelValue';
export const defaultNameOfBindingArgument: DefaultNameOfBindingArgument =
  'modelValue';
