import type {
  ComponentPublicInstance,
  Directive,
  ObjectDirective,
  VNode
} from 'vue';
import type { Data } from '@/app/shared/types';

/**
 * M = Modifiers
 */
export type DirectiveModifier<M extends string> = Partial<
  Record<M, true | undefined>
>;

/*
  V = value/oldValue, A = arg, M = modifiers, D = any

  export declare interface DirectiveBinding<V = any> {
    instance: ComponentPublicInstance | null;
    value: V;
    oldValue: V | null;
    arg?: string;
    modifiers: DirectiveModifiers;
    dir: ObjectDirective<any, V>;
  }
*/
export interface _DirectiveBinding<
  V = any,
  A = string,
  M extends string = string,
  D = any
> {
  instance: ComponentPublicInstance | null;
  value: V;
  oldValue: V | null;
  arg?: A;
  modifiers: DirectiveModifier<M>;
  dir: ObjectDirective<D, V>;
}

// export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;

// export declare interface ObjectDirective<T = any, V = any> {
//   created?: DirectiveHook<T, null, V>;
//   beforeMount?: DirectiveHook<T, null, V>;
//   mounted?: DirectiveHook<T, null, V>;
//   beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;
//   updated?: DirectiveHook<T, VNode<any, T>, V>;
//   beforeUnmount?: DirectiveHook<T, null, V>;
//   unmounted?: DirectiveHook<T, null, V>;
//   getSSRProps?: SSRDirectiveHook;
//   deep?: boolean;
// }

export type DirectiveOption<
  DirectiveElement extends HTMLElement,
  DirectiveValue = any,
  DirectiveArg = string,
  DirectiveModifier extends string = string
> = {
  /**
   * created?: DirectiveHook<T, null, V>;
   */
  created?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  /**
   * beforeMount?: DirectiveHook<T, null, V>;
   */
  beforeMount?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  /**
   * mounted?: DirectiveHook<T, null, V>;
   */
  mounted?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  /**
   * beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;
   */
  beforeUpdate?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: VNode<any, DirectiveElement>
  ) => void;

  /**
   * updated?: DirectiveHook<T, VNode<any, T>, V>;
   */
  updated?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: VNode<any, DirectiveElement>
  ) => void;

  /**
   * beforeUnmount?: DirectiveHook<T, null, V>;
   */
  beforeUnmount?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  /**
   * unmounted?: DirectiveHook<T, null, V>;
   */
  unmounted?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  /**
   * getSSRProps?: SSRDirectiveHook;
   */
  getSSRProps?: (
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode
  ) => Data | undefined;

  /**
   * deep?: boolean;
   */
  deep?: boolean;
};
