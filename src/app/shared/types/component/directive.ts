import type {
  ComponentPublicInstance,
  Directive,
  ObjectDirective,
  VNode
} from 'vue';
import type { Data } from '@/app/shared/types';

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

/**
 * M = Modifiers
 */
export type DirectiveModifier<M extends string> = Partial<Record<M, true>>;

// /**
//  * @see https://github.com/vuejs/core/blob/main/packages/runtime-core/src/directives.ts
//  *
//  * D = Directive, V = Value, A = Arguments, M = Modifiers
//  */
// export type ArgumentsOfDirective<
//   D = Directive,
//   V = any,
//   A = string,
//   M = DirectiveModifier
// > = Array<[D] | [D, V] | [D, V, A] | [D, V, A, M]>;

/**
 * D = Directive, V = Value, A = Argument, M = Modifiers
 */
export type DirectiveArgument<
  D = Directive,
  V = any,
  A = string,
  M = DirectiveModifier<any>
> = [D] | [D, V] | [D, V, A] | [D, V, A, M];

/*
  V = value/oldValue, A = arg, M = modifiers, D = any
*/
export interface _DirectiveBinding<
  V = any,
  A = string,
  M = DirectiveModifier<string>,
  D = any
> {
  instance: ComponentPublicInstance<Data, Data, Data> | null;
  value: V;
  oldValue: V | null;
  arg?: A;
  modifiers: M;
  dir: ObjectDirective<D, V>;
}

// export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;

export type _DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (
  el: T,
  binding: _DirectiveBinding<V>,
  vnode: VNode<any, T>,
  prevVNode: Prev
) => void;

export type DirectiveName = {
  readonly name: string;
};

export type DirectiveOption<
  ElArgument extends HTMLElement,
  BindingArgument extends VNode<any, ElArgument>,
  VNodeArgument extends VNode<any, ElArgument>
> = {
  /**
   * created?: DirectiveHook<T, null, V>;
   */
  created?: (
    el: ElArgument,
    binding: BindingArgument,
    prevVNode: VNode<any, ElArgument> | null
  ) => void;

  /**
   * beforeMount?: DirectiveHook<T, null, V>;
   */
  beforeMount?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  /**
   * mounted?: DirectiveHook<T, null, V>;
   */
  mounted?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  /**
   * beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;
   */
  beforeUpdate?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ) => void;

  /**
   * updated?: DirectiveHook<T, VNode<any, T>, V>;
   */
  updated?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ) => void;

  /**
   * beforeUnmount?: DirectiveHook<T, null, V>;
   */
  beforeUnmount?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  /**
   * unmounted?: DirectiveHook<T, null, V>;
   */
  unmounted?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  /**
   * getSSRProps?: SSRDirectiveHook;
   */
  getSSRProps?: (binding: BindingArgument, vnode: VNode) => Data | undefined;

  /**
   * deep?: boolean;
   */
  deep?: boolean;
};

export type DirectiveRegisterFunction = {
  register: () => {
    /*
      we have to use "any" ((DirectiveHookOption & DirectiveDeepOption) | any)
      instead of "DirectiveHookOption & DirectiveDeepOption"
      otherwise type "directives?: Record<string, Directive>;" from "ComponentOptionsBase" will throw error
    */
    [name: string]: any;
  };
};

export type DirectiveUseFunction<T = unknown> = {
  use: (directiveOption?: T) => any[];
  // use: (directiveOption?: DirectiveOption) => Directive<any, any>;
};
