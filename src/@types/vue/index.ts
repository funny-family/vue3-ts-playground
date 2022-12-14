import type { AnyFunction } from '@/app/shared/types';
import type { DataAttribute } from '@/app/shared/types/component/attrs';
import type { VShow, VModel } from '@/app/shared/types/directives';
import type {
  DatasetComponentRootElId,
  DatasetComponentForwardElId
} from '@/app/shared/utils/forward-el';
import type { NormalizedStyle } from '@vue/shared';

export * from '../../../node_modules/vue/dist/vue';

export { Transition } from './transition';
export { Suspense } from './suspense';

declare module 'vue' {
  export interface HTMLAttributes
    extends VShow.Directive,
      DatasetComponentRootElId,
      DatasetComponentForwardElId,
      DataAttribute {}

  export interface InputHTMLAttributes extends VModel.Directive {}
  export interface TextareaHTMLAttributes extends VModel.Directive {}
  export interface SelectHTMLAttributes extends VModel.Directive {}
}

/*
  export declare const withModifiers: (
    fn: Function,
    modifiers: string[]
  ) => (event: Event, ...args: unknown[]) => any;

  real type in the docs -> function withModifiers(fn: Function, modifiers: string[]): Function

  function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
*/
/**
 * @see https://vuejs.org/api/render-function.html#withmodifiers
 */
export declare function withModifiers<T extends AnyFunction>(
  fn: T,
  modifiers: string[]
): T;

interface AttributeDictionary {
  [id: string]: any;
}

type AttributeValue =
  | AttributeArray
  | AttributeDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

interface AttributeArray extends Array<AttributeValue> {}

/*
  export declare function normalizeClass(value: unknown): string;
*/
/**
 * @see https://segmentfault.com/a/1190000041616822
 */
export declare function normalizeClass(value: AttributeValue): string;

/*
  export declare function normalizeStyle(value: unknown): NormalizedStyle | string | undefined;
*/
/**
 * @see https://segmentfault.com/a/1190000041616822
 */
export declare function normalizeStyle(
  value: AttributeValue
): NormalizedStyle | string | undefined;

/*
  "Vue3 source code reading: general tool function (4)"
  https://juejin.cn/post/7095300384305971231

  全面解析vue3源码函数工具库
  https://juejin.cn/post/7117191006423875597
*/
