import type {
  HTMLAttributes,
  Events,
  SVGAttributes,
  AriaAttributes
} from 'vue';
import type {
  FilterNotStartingWith,
  FilterStartsWith
} from '@/app/shared/types';

export type CSSClassAttribute = { class?: string };

type DataAttributeKey = `data-${string}`;

export type DataAttribute = {
  // @ts-ignore
  [key: DataAttributeKey]: any;
};

export type OnlyHTMLAttributes = Pick<
  HTMLAttributes,
  FilterNotStartingWith<keyof HTMLAttributes, 'on' | 'aria-' | 'data-' | 'v-'>
>;

export type OnlyHTMLAriaAttributes = AriaAttributes;

export type OnlyHTMLEventAttributes = Events;

export type OnlyHTMLDataAttributes = Pick<
  HTMLAttributes,
  FilterStartsWith<keyof HTMLAttributes, 'data-'>
>;

export type OnlyHTMLSVGAttributes = Pick<
  SVGAttributes,
  FilterNotStartingWith<keyof SVGAttributes, 'on' | 'aria-' | 'data-'>
>;
