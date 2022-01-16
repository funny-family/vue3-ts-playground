import type { Prop } from 'vue';
import { capitalize } from '@/app/shared/utils/capitalize';

type Name = string;
type Value = string | boolean;
type NameOfUpdateFunction = 'update';

interface VModelArgumentInterface<N extends Name, D extends Value> {
  propName: N;
  propObject: Prop<D>;
  nameOfEmit: `${NameOfUpdateFunction}:${N}`;
  normalizedNameOfEmit: `${NameOfUpdateFunction}${Capitalize<N>}`;
}

interface VModelArgumentConstructor<N extends Name, D extends Value> {
  name: N;
  defaultValue: D;
}

export class VModelArgument<N extends Name, D extends Value>
  implements VModelArgumentInterface<N, D>
{
  private name: N;
  private defaultValue: D;
  private readonly nameOfUpdateFunction: NameOfUpdateFunction = 'update';

  constructor({ name, defaultValue }: VModelArgumentConstructor<N, D>) {
    this.name = name;
    this.defaultValue = defaultValue;
  }

  get propName(): N {
    return this.name;
  }

  get propObject(): Prop<D> {
    return {
      type:
        typeof this.defaultValue === 'string'
          ? String
          : typeof this.defaultValue === 'boolean'
          ? Boolean
          : null,
      required: false,
      default: this.defaultValue
    } as Prop<D>;
  }

  get nameOfEmit(): `${NameOfUpdateFunction}:${N}` {
    return `${this.nameOfUpdateFunction}:${this.name}` as const;
  }

  get normalizedNameOfEmit(): `${NameOfUpdateFunction}${Capitalize<N>}` {
    return `${this.nameOfUpdateFunction}${capitalize(this.name)}` as const;
  }
}

export type DefaultVModelArgumentName = 'modelValue';
export const defaultVModelArgumentName: DefaultVModelArgumentName =
  'modelValue';
