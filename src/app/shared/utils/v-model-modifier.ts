import type { Prop, PropType } from 'vue';
import type { RecordOfBoolean } from '@/app/shared/types';

type Name = 'modelModifiers';

type Modifier<T extends string> = RecordOfBoolean<T>;

interface VModelModifierFields<M extends string> {
  readonly propName: Name;
  readonly propObject: Prop<Modifier<M>>;
}

export class VModelModifier<M extends string>
  implements VModelModifierFields<M>
{
  private readonly name: Name = 'modelModifiers';

  get propName(): Name {
    return this.name;
  }

  get propObject(): Prop<Modifier<M>> {
    return {
      type: Object as PropType<Modifier<M>>,
      required: false,
      default: () => ({})
    };
  }
}
