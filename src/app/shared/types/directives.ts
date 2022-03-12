import type { Slots } from 'vue';
import type { Modifier } from '@/app/shared/utils/modifiers';

export namespace VShow {
  /**
   * @see https://vuejs.org/api/built-in-directives.html#v-show
   */
  export type Directive = {
    'v-show'?: boolean;
  };
}

export namespace VSlots {
  /**
   * @see https://v3.vuejs.org/api/directives.html#v-slot
   */
  export type Directive<T = Slots> = {
    'v-slots'?: T;
  };
}

export namespace VModel {
  type Value = string | boolean;
  type Argument = string;
  type BaseModifier = `${Modifier.VModel.Base}`;
  type CombinedModifier<T> = BaseModifier | T;

  /**
   * @see https://v3.vuejs.org/api/directives.html#v-model
   */
  export type Directive<V = Value, A = Argument, AdditionalModifier = void> = {
    'v-model'?:
      | V
      // ================================================
      | [V, A]
      | [V, A][]
      // ================================================
      | [
          V,
          AdditionalModifier extends void
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ]
      | [
          V,
          AdditionalModifier extends void
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ][]
      // ================================================
      | [
          V,
          A,
          AdditionalModifier extends void
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ]
      // ================================================
      | [
          V,
          A,
          AdditionalModifier extends void
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ][];
  };
}
