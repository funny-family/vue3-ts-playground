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

const htmlAttributes = [
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
] as const;
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
  [P in keyof T]: StartsWith<P, typeof htmlAttributes[number]> extends true
    ? T[P]
    : never;
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

const el: WithoutDirective<OnlyElAttributes<InputHTMLAttributes>> = {};

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
        // @ts-expect-error
        attrsRecord.aria[key] = attrs[key];

        break;
      }

      case isDataAttribute(key): {
        // @ts-expect-error
        attrsRecord.data[key] = attrs[key];

        break;
      }

      case isHtmlAttribute(key): {
        // @ts-expect-error
        attrsRecord.html[key] = attrs[key];

        break;
      }

      case isOn(key): {
        // @ts-expect-error
        attrsRecord.event[key] = attrs[key];

        break;
      }

      default: {
        // @ts-expect-error
        attrsRecord.el[key] = attrs[key];

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
