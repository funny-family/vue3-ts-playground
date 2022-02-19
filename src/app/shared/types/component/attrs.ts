import type { HTMLAttributes } from 'vue';

export type CSSClassAttribute = { class?: string };

type HTMLAttributesWithoutCSSClass<T = HTMLAttributes> = Omit<T, 'class'>;

export type HTMLAttributesWithClassAttributeAsString<T = HTMLAttributes> =
  HTMLAttributesWithoutCSSClass<T> & CSSClassAttribute;
