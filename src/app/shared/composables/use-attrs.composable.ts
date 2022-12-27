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

// =========================================================================================
// https://catchts.com/union-array
// credits goes to https://stackoverflow.com/a/50375286
// https://matthias-falk.medium.com/tuple-union-conversions-in-typescript-77fef29cd6e6
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

// Converts union to overloaded function
type UnionToOvlds<U> = UnionToIntersection<
  U extends any ? (f: U) => void : never
>;

type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

// Finally me)
type UnionToArray<T, A extends unknown[] = []> = IsUnion<T> extends true
  ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
  : [T, ...A];
// =========================================================================================

// =========================================================================================
type FilterStartsWith<
  Set,
  Needle extends string
> = Set extends `${Needle}${infer _X}` ? Set : never;

type FilterNotStartingWith<
  Set,
  Needle extends string
> = Set extends `${Needle}${infer _X}` ? never : Set;
// =========================================================================================

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
// https://stackoverflow.com/questions/55127004/how-to-transform-union-type-to-tuple-type
// https://stackoverflow.com/questions/51804810/how-to-remove-fields-from-a-typescript-interface-via-extension

// =========================================================================================
type OnlyHTMLAttributes = Pick<
  HTMLAttributes,
  FilterNotStartingWith<keyof HTMLAttributes, 'on' | 'aria-' | 'data-' | 'v-'>
>;

type OnlyEventAttributes<T extends HTMLAttributes> = Pick<
  T,
  FilterStartsWith<keyof T, 'on'>
>;

type OnlyAriaAttributes<T extends HTMLAttributes> = Pick<
  T,
  FilterStartsWith<keyof T, 'aria-'>
>;

type OnlyDataAttributes<T extends HTMLAttributes> = Pick<
  T,
  FilterStartsWith<keyof T, 'data-'>
>;

type OnlyElAttributes<T extends HTMLAttributes> = Omit<
  T,
  | keyof OnlyHTMLAttributes
  | keyof OnlyEventAttributes<T>
  | keyof OnlyAriaAttributes<T>
  | keyof OnlyDataAttributes<T>
  | FilterStartsWith<keyof T, 'v-'>
>;

type HTMLAttributesTyple = UnionToArray<keyof OnlyHTMLAttributes>;

// Union to Tuple
// https://github.com/type-challenges/type-challenges/blob/main/questions/00730-hard-union-to-tuple/README.md

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

type ResolvedAttrs<T extends HTMLAttributes, K extends string> = {
  html?: Omit<OnlyHTMLAttributes, K>;
  event?: Omit<OnlyEventAttributes<T>, K>;
  aria?: Omit<OnlyAriaAttributes<T>, K>;
  data?: Omit<OnlyDataAttributes<T>, K>;
  el?: Omit<OnlyElAttributes<T>, K>;
};

const resolveAttrs = <T extends HTMLAttributes, K extends string>(
  attrs: T,
  { ignoreList = [] }: { ignoreList: K[] }
) => {
  const resolvedAttrs = attr as ResolvedAttrs<T, K>;

  for (const key in attrs) {
    if (!ignoreList.includes(key as any)) {
      if (
        isAriaAttribute(key)
      ) {
        (resolvedAttrs.aria as any)[key] = attrs[key];
      }
      // prettier-ignore
      else if (
        isDataAttribute(key)
      ) {
        (resolvedAttrs.data as any)[key] = attrs[key];
      }
      // prettier-ignore
      else if (
        isHtmlAttribute(key)
      ) {
        (resolvedAttrs.html as any)[key] = attrs[key];
      }
      // prettier-ignore
      else if (
        isOn(key)
      ) {
        (resolvedAttrs.event as any)[key] = attrs[key];
      }
      // prettier-ignore
      else {
        (resolvedAttrs.el as any)[key] = attrs[key];
      }
    }
  }

  return resolvedAttrs;
};

export const useAttrs = <T extends HTMLAttributes, K extends string>(
  attrs: T,
  { ignoreList = [] }: { ignoreList: K[] }
): ResolvedAttrs<T, K> => {
  const computedAttrs = computed<ResolvedAttrs<T, K>>(() => attr as any);

  const { aria, data, event, html, el } = resolveAttrs(attrs, {
    ignoreList
  });

  computedAttrs.value.aria = aria;
  computedAttrs.value.data = data;
  computedAttrs.value.event = event;
  computedAttrs.value.html = html;
  computedAttrs.value.el = el;

  return computedAttrs.value;
};

// type ResolvedAttrs1<T extends HTMLAttributes, K extends string> = {
//   html: Omit<Partial<OnlyHTMLAttributes>, K>;
//   event: Omit<Partial<OnlyEventAttributes<T>>, K>;
//   aria: Omit<Partial<OnlyAriaAttributes<T>>, K>;
//   data: Omit<Partial<OnlyDataAttributes<T>>, K>;
//   el: Omit<Partial<OnlyElAttributes<T>>, K>;
// };

// const f = <T extends HTMLAttributes, K extends string>(
//   attrs: T,
//   { ignoreList }: { ignoreList: K[] }
// ) => {
//   const resolvedAttrs = attr as ResolvedAttrs1<T, K>;

//   return resolvedAttrs;
// };
