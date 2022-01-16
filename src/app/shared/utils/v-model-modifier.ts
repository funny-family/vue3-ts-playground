import type { Prop, PropType } from 'vue';

type Name = 'modelModifiers';

type Modifier<T extends string> = Record<T, boolean>;

interface VModelModifierFields<M extends string> {
  propName: Name;
  propObject: Prop<Modifier<M>>;
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
