import type { Slots } from 'vue';
import type { Modifier } from '@/app/shared/utils/modifiers';

export namespace VSlots {
  /**
   * @see https://v3.vuejs.org/api/directives.html#v-slot
   */
  export type Directive<T = Slots> = {
    'v-slots'?: T;
  };
}

/**
 * @see https://v3.vuejs.org/api/directives.html#v-once
 */
export type VOnce = {
  'v-once'?: boolean;
};

export namespace VModel {
  type Value = string | boolean;
  type Argument = string;
  type BaseModifier = `${Modifier.VModel.Base}`;

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
            : (BaseModifier | AdditionalModifier)[]
        ]
      | [
          Value,
          AdditionalModifier extends void
            ? BaseModifier[]
            : (BaseModifier | AdditionalModifier)[]
        ][]
      // ================================================
      | [
          V,
          A,
          AdditionalModifier extends void
            ? BaseModifier[]
            : (BaseModifier | AdditionalModifier)[]
        ]
      | [
          V,
          A,
          AdditionalModifier extends void
            ? BaseModifier[]
            : (BaseModifier | AdditionalModifier)[]
        ][];
  };
}
