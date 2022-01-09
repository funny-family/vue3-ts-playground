export namespace VSlots {
  /**
   * @see https://v3.vuejs.org/api/directives.html#v-slot
   */
  export type Directive<T = {}> = {
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
  type BaseModifier =
    /**
     * @see https://v3.vuejs.org/guide/forms.html#lazy
     */
    | 'lazy'
    /**
     * @see https://v3.vuejs.org/guide/forms.html#number
     */
    | 'number'
    /**
     * @see https://v3.vuejs.org/guide/forms.html#trim
     */
    | 'trim';
  type CustomModifier = '';
  type Modifier = Exclude<BaseModifier | CustomModifier, ''>;

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
            ? (Modifier | AdditionalModifier)[]
            : AdditionalModifier[]
        ]
      | [
          Value,
          AdditionalModifier extends void
            ? (Modifier | AdditionalModifier)[]
            : AdditionalModifier[]
        ][]
      // ================================================
      | [
          V,
          A,
          AdditionalModifier extends void
            ? (Modifier | AdditionalModifier)[]
            : AdditionalModifier[]
        ]
      | [
          V,
          A,
          AdditionalModifier extends void
            ? (Modifier | AdditionalModifier)[]
            : AdditionalModifier[]
        ][];
  };
}
