import type { PropType } from 'vue';
import type { RecordOfBoolean } from '@/app/shared/types';
import type { PropOption } from '@/app/shared/types/component/props';

type Name = 'modelModifiers';

type Modifier<T extends string> = RecordOfBoolean<T>;

interface VModelModifierFields<M extends string> {
  readonly propName: Name;
  readonly propObject: PropOption<Modifier<M>, false, Modifier<M>>;
}

export class VModelModifier<M extends string>
  implements VModelModifierFields<M>
{
  private readonly name: Name = 'modelModifiers';

  get propName(): Name {
    return this.name;
  }

  get propObject(): PropOption<Modifier<M>, false, Modifier<M>> {
    return {
      type: Object as PropType<Modifier<M>>,
      required: false,
      default: () => ({})
    };
  }
}
