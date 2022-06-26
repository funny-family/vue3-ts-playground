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
  type BaseModifier = `${Modifier.VModel.Base}`;
  type CombinedModifier<T> = BaseModifier | T;

  /**
   * @see https://v3.vuejs.org/api/directives.html#v-model
   */
  export type Directive<
    V = string,
    A extends string = '',
    AdditionalModifier extends string = ''
  > = {
    'v-model'?:
      | V
      // ================================================
      | [V, A]
      | [V, A][]
      // ================================================
      | [
          V,
          AdditionalModifier extends ''
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ]
      | [
          V,
          AdditionalModifier extends ''
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ][]
      // ================================================
      | [
          V,
          A,
          AdditionalModifier extends ''
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ]
      // ================================================
      | [
          V,
          A,
          AdditionalModifier extends ''
            ? BaseModifier[]
            : CombinedModifier<AdditionalModifier>[]
        ][];
  };

  // /**
  //  * @see https://v3.vuejs.org/api/directives.html#v-model
  //  */
  // export type Directive<
  //   V = string,
  //   A extends string = '',
  //   AM extends string = ''
  // > = {
  //   'v-model'?:
  //     | V
  //     | [V, A]
  //     | Array<[V, A]>
  //     | [V, BaseModifier[]]
  //     | [V, Array<AM & BaseModifier>]
  //     | [V, A, BaseModifier[]]
  //     | Array<[V, A, BaseModifier[]]>
  //     | Array<[V, A, Array<AM & BaseModifier>]>;
  // };

  // type Dir<V = string, A extends string = '', AM extends string = ''> = {
  //   'v-model'?:
  //     | V
  //     | (A extends ''
  //         ? [V, BaseModifier[]] | [V, BaseModifier[]][]
  //         : AM extends ''
  //         ? [V, A, BaseModifier[]] | [V, A, BaseModifier[]][]
  //         : [V, A, (BaseModifier & AM)[]] | [V, A, (BaseModifier & AM)[]][]);
  // };

  // type Dir<V = string, A extends string = '', AM extends string = ''> = {
  //   'v-model'?:
  //     | V
  //     | (A extends ''
  //         ? AM extends ''
  //           ? [V, BaseModifier[]]
  //           : [V, Array<AM & BaseModifier>]
  //         : AM extends ''
  //         ? [V, A, BaseModifier[]] | Array<[V, A, BaseModifier[]]>
  //         :
  //             | [V, A, Array<AM & BaseModifier>]
  //             | Array<[V, A, Array<AM & BaseModifier>]>);
  // };

  type Dir<V = string, A extends string = '', AM extends string = ''> = {
    'v-model'?:
      | V
      | [V, A]
      | Array<[V, A]>
      | [V, BaseModifier[]]
      | [V, Array<AM & BaseModifier>]
      | [V, A, BaseModifier[]]
      | Array<[V, A, BaseModifier[]]>
      | Array<[V, A, Array<AM & BaseModifier>]>;
  };

  type M = Dir<string, 'test'>;

  const m: M = {
    // 'v-model': ['', '']
  };
}
