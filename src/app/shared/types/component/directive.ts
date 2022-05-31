import type { ComponentPublicInstance, ObjectDirective, VNode } from 'vue';
import type { Data } from '@/app/shared/types';

export type DirectiveModifier<M extends string> = Partial<
  Record<M, true | undefined>
>;

export interface _DirectiveBinding<
  V = any,
  A = string,
  M extends string = string,
  D = any
> {
  instance: ComponentPublicInstance | null;
  value: V extends undefined ? undefined : V;
  oldValue: V extends undefined ? undefined : V | null;
  arg?: A extends '' ? undefined : A;
  modifiers: DirectiveModifier<M> extends DirectiveModifier<''>
    ? {}
    : DirectiveModifier<M>;
  dir: ObjectDirective<D, V>;
}

export type DirectiveOption<
  DirectiveElement extends Element = HTMLElement,
  DirectiveValue = any,
  DirectiveArg extends string = string,
  DirectiveModifier extends string = string
> = {
  created?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  beforeMount?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  mounted?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  beforeUpdate?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: VNode<any, DirectiveElement>
  ) => void;

  updated?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: VNode<any, DirectiveElement>
  ) => void;

  beforeUnmount?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  unmounted?: (
    el: DirectiveElement,
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode<any, DirectiveElement>,
    prevVNode: null
  ) => void;

  getSSRProps?: (
    binding: _DirectiveBinding<DirectiveValue, DirectiveArg, DirectiveModifier>,
    vnode: VNode
  ) => Data | undefined;

  deep?: boolean;
};
