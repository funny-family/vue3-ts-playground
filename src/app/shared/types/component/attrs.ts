import type { HTMLAttributes } from 'vue';
import type { OptionalPropertyOf } from '@/app/shared/types';
import type { VModel } from '@/app/shared/types/directives';

export type CSSClassAttribute = { class?: string };

export type CSSClassNameAttribute = { className?: string };

type HTMLAttributesWithoutCSSClass<T = HTMLAttributes> = Omit<T, 'class'>;

export type HTMLAttributesWithClassAttributeAsString<T = HTMLAttributes> =
  HTMLAttributesWithoutCSSClass<T> & CSSClassAttribute;

export type WithoutVModelAttr<T> = Omit<
  T,
  `${OptionalPropertyOf<VModel.Directive>}`
>;
