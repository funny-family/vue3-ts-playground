import type {
  HTMLAttributes,
  AreaHTMLAttributes,
  InputHTMLAttributes
} from 'vue';
import type {
  OmitByType,
  RequireOnlyOne,
  StartsWith
} from '@/app/shared/types';
import { computed, toRefs, shallowRef, reactive } from 'vue';
import { isOn } from '@vue/shared';

// https://stackoverflow.com/questions/43909566/get-keys-of-a-typescript-interface-as-array-of-strings

// https://blog.wax-o.com/2015/05/an-alternative-to-if-else-and-switch-in-javascript/

/**
 * @description
 * adadad
 *
 * @example
 * adada
 */
const isAriaAttribute = <T extends string>(key: T) =>
  /^(aria-)[a-z]+/.test(key);

/**
 * @description
 * adadad
 *
 * @example
 * adada
 */
const isDataAttribute = <T extends string>(key: T) =>
  /^(data-)[a-z]+/.test(key);

// https://github.com/microsoft/TypeScript/issues/13298

// ========================================================
// type TupleHead<Tuple extends readonly unknown[]> = Tuple extends [
//   infer HeadElement,
//   ...(readonly unknown[])
// ]
//   ? HeadElement
//   : never;

// type TupleTail<Tuple extends readonly unknown[]> = Tuple extends [
//   unknown,
//   ...infer TailElements
// ]
//   ? TailElements
//   : never;

type TuplePrepend<Tuple extends readonly unknown[], NewElement> = [
  NewElement,
  ...Tuple
];

type Consumer<Value> = (value: Value) => void;

type IntersectionFromUnion<Union> = (
  Union extends unknown ? Consumer<Union> : never
) extends Consumer<infer ResultIntersection>
  ? ResultIntersection
  : never;

type OverloadedConsumerFromUnion<Union> = IntersectionFromUnion<
  Union extends unknown ? Consumer<Union> : never
>;

type UnionLast<Union> = OverloadedConsumerFromUnion<Union> extends (
  a: infer A
) => void
  ? A
  : never;

type UnionExcludingLast<Union> = Exclude<Union, UnionLast<Union>>;

type TupleFromUnionRec<
  RemainingUnion,
  CurrentTuple extends readonly unknown[]
> = [RemainingUnion] extends [never]
  ? CurrentTuple
  : TupleFromUnionRec<
      UnionExcludingLast<RemainingUnion>,
      TuplePrepend<CurrentTuple, UnionLast<RemainingUnion>>
    >;

export type TupleFromUnion<Union> = TupleFromUnionRec<Union, []>;
// // ========================================================

// // ========================================================
// // https://stackoverflow.com/questions/55127004/how-to-transform-union-type-to-tuple-type
// // oh boy don't do this
// type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
//   k: infer I
// ) => void
//   ? I
//   : never;
// type LastOf<T> = UnionToIntersection<
//   T extends any ? () => T : never
// > extends () => infer R
//   ? R
//   : never;

// // TS4.0+
// type Push<T extends any[], V> = [...T, V];

// // TS4.1+
// type TuplifyUnion<
//   T,
//   L = LastOf<T>,
//   N = [T] extends [never] ? true : false
// > = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;
// // ========================================================

// https://stackoverflow.com/questions/51804810/how-to-remove-fields-from-a-typescript-interface-via-extension

type HTMLAttributeKey = keyof E;

type HTMLAttributesTyple = TupleFromUnion<HTMLAttributeKey>;

const htmlAttributes: HTMLAttributesTyple = [
  'innerHTML',
  'class',
  'style',
  'accesskey',
  'contenteditable',
  'contextmenu',
  'dir',
  'draggable',
  'hidden',
  'id',
  'lang',
  'placeholder',
  'spellcheck',
  'tabindex',
  'title',
  'translate',
  'radiogroup',
  'role',
  'about',
  'datatype',
  'inlist',
  'prefix',
  'property',
  'resource',
  'typeof',
  'vocab',
  'autocapitalize',
  'autocorrect',
  'autosave',
  'color',
  'itemprop',
  'itemscope',
  'itemtype',
  'itemid',
  'itemref',
  'results',
  'security',
  'unselectable',
  'inputmode',
  'is'
];
/**
 * @description
 * adadad
 *
 * @example
 * adada
 */
const isHtmlAttribute = <T extends string>(key: T) =>
  (htmlAttributes as unknown as string[]).includes(key);

const attr = {
  aria: {},
  data: {},
  event: {},
  html: {},
  el: {}
};

type FilterHTMLAttributes<T extends HTMLAttributes> = {
  [P in keyof T]: StartsWith<P, HTMLAttributeKey> extends true ? T[P] : never;
};
type OnlyHTMLAttributes<T extends HTMLAttributes> = OmitByType<
  FilterHTMLAttributes<T>,
  undefined
>;

type FilterEventAttributes<T extends HTMLAttributes> = {
  [P in keyof T]: StartsWith<P, 'on'> extends true ? T[P] : never;
};
type OnlyEventAttributes<T extends HTMLAttributes> = OmitByType<
  FilterEventAttributes<T>,
  undefined
>;

type FilterAriaAttributes<T extends HTMLAttributes> = {
  [P in keyof T]: StartsWith<P, 'aria-'> extends true ? T[P] : never;
};
type OnlyAriaAttributes<T extends HTMLAttributes> = OmitByType<
  FilterAriaAttributes<T>,
  undefined
>;

type FilterDataAttributes<T extends HTMLAttributes> = {
  [P in keyof T]: StartsWith<P, 'data-'> extends true ? T[P] : never;
};
type OnlyDataAttributes<T extends HTMLAttributes> = OmitByType<
  FilterDataAttributes<T>,
  undefined
>;

type OmitableElKeys<T extends HTMLAttributes> =
  | keyof OnlyHTMLAttributes<T>
  | keyof OnlyEventAttributes<T>
  | keyof OnlyAriaAttributes<T>
  | keyof OnlyDataAttributes<T>;
type OnlyElAttributes<T extends HTMLAttributes> = Omit<T, OmitableElKeys<T>>;

type FilerDirective<T extends Object> = {
  [P in keyof T]: StartsWith<P, 'v-'> extends true ? never : T[P];
};
type WithoutDirective<T extends Object> = OmitByType<
  FilerDirective<T>,
  undefined
>;

type E = WithoutDirective<
  Omit<
    HTMLAttributes,
    | keyof OnlyEventAttributes<HTMLAttributes>
    | keyof OnlyAriaAttributes<HTMLAttributes>
    | keyof OnlyDataAttributes<HTMLAttributes>
  >
>;

type ResolvedAttrs<T extends HTMLAttributes> = {
  html: OnlyHTMLAttributes<T>;
  event: OnlyEventAttributes<T>;
  aria: OnlyAriaAttributes<T>;
  data: OnlyDataAttributes<T>;
  el: WithoutDirective<OnlyElAttributes<T>>;
};

const resolveAttrs = <T extends HTMLAttributes>(attrs: T): ResolvedAttrs<T> => {
  const attrsRecord = attr as ResolvedAttrs<T>;

  for (const key in attrs) {
    switch (true) {
      case isAriaAttribute(key): {
        (attrsRecord.aria as Record<string, any>)[key] = attrs[key];

        break;
      }

      case isDataAttribute(key): {
        (attrsRecord.data as Record<string, any>)[key] = attrs[key];

        break;
      }

      case isHtmlAttribute(key): {
        (attrsRecord.html as Record<string, any>)[key] = attrs[key];

        break;
      }

      case isOn(key): {
        (attrsRecord.event as Record<string, any>)[key] = attrs[key];

        break;
      }

      default: {
        (attrsRecord.el as Record<string, any>)[key] = attrs[key];

        break;
      }
    }
  }

  return attrsRecord;
};

export const useAttrs = <T extends HTMLAttributes>(attrs: T) => {
  const computedAttrs = computed<ResolvedAttrs<T>>(() => attr as any);

  const { aria, data, event, html, el } = resolveAttrs(attrs);

  computedAttrs.value.aria = aria;
  computedAttrs.value.data = data;
  computedAttrs.value.event = event;
  computedAttrs.value.html = html;
  computedAttrs.value.el = el;

  return computedAttrs.value;
};
