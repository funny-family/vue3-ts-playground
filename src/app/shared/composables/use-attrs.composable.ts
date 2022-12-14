import type { HTMLAttributes } from 'vue';
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

// const reservedPropsList = ['key', 'ref', 'ref_for', 'ref_key'] as const;
// /**
//  * @description
//  * adadad
//  *
//  * @example
//  * adada
//  */
// const isReservedProp = <T extends string>(key: T) =>
//   (reservedPropsList as unknown as string[]).includes(key);

type FilterKeysThatStartsWithOn<T> = {
  [P in keyof T]: StartsWith<P, 'on'> extends true ? T[P] : never;
};
type OnlyStartsWithOn<T> = OmitByType<FilterKeysThatStartsWithOn<T>, never>;

type FilterKeysThatStartsWithAria<T> = {
  [P in keyof T]: StartsWith<P, 'aria-'> extends true ? T[P] : never;
};
type OnlyStartsWithAria<T> = OmitByType<FilterKeysThatStartsWithAria<T>, never>;

type H = typeof htmlAttributes[number];
type FilterKeysThatHtml<T> = {
  [P in keyof T]: StartsWith<P, H> extends true ? T[P] : never;
};
type OnlyHtmlAttrs<T> = OmitByType<FilterKeysThatHtml<T>, never>;

type FilterKeysThatStartsWithData<T> = {
  [P in keyof T]: StartsWith<P, 'data-'> extends true ? T[P] : never;
};
type OnlyStartsWithData<T> = OmitByType<FilterKeysThatStartsWithData<T>, never>;

type ConstructedAttrs<T> = {
  aria: OnlyStartsWithAria<T>;
  data: OnlyStartsWithData<T> & Record<string, any>;
  event: OnlyStartsWithOn<T>;
  html: OnlyHtmlAttrs<T>;
  rest: Record<string, any>;
};

type K = FilterKeysThatStartsWithOn<HTMLAttributes>;

const k: K = {};

// const attrsMapRecord = {
//   aria: 'aria',
//   data: 'data',
//   event: 'event',
//   html: 'html',
//   rest: 'rest'
// } as const;

const obk = {
  aria: {},
  data: {},
  event: {},
  html: {},
  el: {}
};

const resolveAttrs = <T extends HTMLAttributes>(attrs: T) => {
  const attrsRecord: Record<string, any> = obk;

  for (const key in attrs) {
    if (isAriaAttribute(key)) {
      attrsRecord.aria[key] = attrs[key];
    }
    // prettier-ignore
    else if (
      isDataAttribute(key)
    ) {
      attrsRecord.data[key] = attrs[key];
    }
    // prettier-ignore
    else if (
      isHtmlAttribute(key)
    ) {
      attrsRecord.html[key] = attrs[key];
    }
    // prettier-ignore
    else if (isOn(key)) {
      attrsRecord.event[key] = attrs[key];
    }
    // prettier-ignores
    else {
      attrsRecord.el[key] = attrs[key];
    }
  }

  return attrsRecord;
};

export const useAttrs = <T extends HTMLAttributes>(
  attrs: T
): Readonly<ConstructedAttrs<T>> => {
  const computedAttrs = computed(() => obk as any);

  // const computedAttrs = reactive<ConstructedAttrs>({
  //   aria: {},
  //   data: {},
  //   event: {},
  //   html: {},
  //   rest: {}
  // });

  type D = OnlyStartsWithOn<typeof attrs>;

  const { aria, data, event, html, el } = resolveAttrs(attrs);

  computedAttrs.value.aria = aria;
  computedAttrs.value.data = data;
  computedAttrs.value.event = event;
  computedAttrs.value.html = html;
  computedAttrs.value.el = el;

  console.log('computedAttrs:', computedAttrs);

  return computedAttrs.value;
};
