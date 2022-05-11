import type { Numberish } from '@/app/shared/types';
import type { VNode } from 'vue';

export const nameOfComponentRootElDataset = 'data-component-root-el-id';
export const nameOfComponentForwardElDataset = 'data-component-forward-el-id';

export type DatasetComponentRootElId = {
  [nameOfComponentRootElDataset]?: Numberish;
};

export type DatasetComponentForwardElId = {
  [nameOfComponentForwardElDataset]?: Numberish;
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @description
 * adada
 *
 * @example
 * adad
 */
export const getForwardElementOfComponent = (componentUid: number) => {
  const selector =
    `[${nameOfComponentRootElDataset}="${componentUid}"] [${nameOfComponentForwardElDataset}="${componentUid}"]` as const;
  const element = document.querySelector(selector);

  return element;
};

// document.querySelector('#v-id-7 > [data-root-el="true"]')

// dataset: DOMStringMap {componentRootElId: '7'}

// https://www.tutorialspoint.com/binary-search-program-in-javascript

// https://stackoverflow.com/questions/69393873/binary-search-in-array-of-object-javascript

export const getForwardElementOfComponent1 = <T extends any>(el: VNode<T>) => {
  if (el.children === null) {
    return el;
  }

  (el.children as VNode<any>[]).forEach((childrenElement) => {
    console.log('childrenElement:', childrenElement);
  });
};
