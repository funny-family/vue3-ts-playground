import type { Numberish, Booleanish } from '@/app/shared/types';

export const reservedDataAttributeName = {
  dataComponentRootElId: 'data-component-root-el-id',
  dataComponentForwardElId: 'data-component-forward-el-id',
  dataIsComponent: 'data-is-component'
} as const;

/**
 * @description
 * adadad
 *
 * @example
 * adadad
 */
export const createComponentDataAttrMarks = (uid: number) => {
  const rootElDataAttrs = {
    [reservedDataAttributeName.dataIsComponent]: true,
    [reservedDataAttributeName.dataComponentRootElId]: uid
  } as const;

  const forwardElDataAttrs = {
    [reservedDataAttributeName.dataComponentForwardElId]: uid
  } as const;

  return {
    rootElDataAttrs,
    forwardElDataAttrs
  } as const;
};

export type ReservedDataAttributes = {
  [reservedDataAttributeName.dataComponentRootElId]?: Numberish;
  [reservedDataAttributeName.dataComponentForwardElId]?: Numberish;
  [reservedDataAttributeName.dataIsComponent]?: Booleanish;
};

/**
 * @description
 * Extract component's uid from DOM's "dataset" attribute.
 *
 * @example
 * const componentUid = extractComponentUid(el);
 * console.log(el); // 7
 */
const extractComponentUidFromDataset = <T extends HTMLElement>(
  el: T
): number | null => {
  const datasetComponentRootElId = el.dataset['componentRootElId'];

  if (datasetComponentRootElId == null) {
    return null;
  }

  return +datasetComponentRootElId;
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @description
 * Find component's forward element base on uid of component.
 *
 * @example
 * const element = querySelectForwardElByComponentUid(7);
 * console.log(element); // <input class="textField__input[vub6a]" type="text" data-component-forward-el-id="7">
 */
const querySelectForwardElByComponentUid = <T extends Element>(
  componentUid: number | null
): T | null => {
  if (componentUid == null) {
    return null;
  }

  const selector =
    `[${reservedDataAttributeName.dataComponentRootElId}="${componentUid}"] [${reservedDataAttributeName.dataComponentRootElId}="${componentUid}"]` as const;
  const element = document.querySelector(selector);

  return element as T;
};

/**
 * @description
 * Find component's forward element base on root element.
 * Works only if component' root and forward element marked with specified dataset name.
 *
 * @example
 * // el = <div class="textField[3z8wz]" data-component-root-el-id="7">
 * const forwardEl = findComponentForwardEl(el);
 * console.log(el); // <input class="textField__input[vub6a]" type="text" data-component-forward-el-id="7">
 */
export const findComponentForwardEl = <T extends HTMLElement>(
  el: T
): T | null =>
  querySelectForwardElByComponentUid(
    extractComponentUidFromDataset(el)
  ) as T | null;

// document.querySelector('#v-id-7 > [data-root-el="true"]')

// dataset: DOMStringMap {componentRootElId: '7'}

// https://www.tutorialspoint.com/binary-search-program-in-javascript

// https://stackoverflow.com/questions/69393873/binary-search-in-array-of-object-javascript

// https://github.com/vuejs/rfcs/issues/258

// https://stackoverflow.com/questions/53938203/javascript-recursive-search-on-an-array-of-objects
