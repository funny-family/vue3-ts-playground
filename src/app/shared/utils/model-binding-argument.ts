import { Prop } from 'vue';
import { capitalizeFirstLetter } from './capitalize-first-letter';

type NameOfUpdateFunction = 'update';
type PropName<T extends string> = T;
type EmitName<T extends string> = `${NameOfUpdateFunction}:${T}`;
type NormalizedEmitName<T extends string> =
  `${NameOfUpdateFunction}${Capitalize<T>}`;

export class VModelBindingArgument<
  Name extends string,
  DefaultValue extends string | boolean
> {
  private readonly name: Name;
  private readonly defaultValue: DefaultValue;
  private readonly nameOfUpdateFunction: NameOfUpdateFunction = 'update';

  constructor(name: Name, defaultValue: DefaultValue) {
    this.name = name;
    this.defaultValue = defaultValue;
  }

  get propName(): PropName<Name> {
    return this.name;
  }

  get emitName(): EmitName<Name> {
    return `${this.nameOfUpdateFunction}:${this.name}` as const;
  }

  get normalizedEmitName(): NormalizedEmitName<Name> {
    return `${this.nameOfUpdateFunction}${capitalizeFirstLetter(
      this.name
    )}` as const;
  }

  get propObject() {
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

// default value
export type ModelValueName = 'modelValue';
export type ModelValueType = string;
export const modelValueName: ModelValueName = 'modelValue';
export const { propName, propObject, emitName } = new VModelBindingArgument<
  ModelValueName,
  ModelValueType
>(modelValueName, '');
