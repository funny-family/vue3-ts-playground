import { findComponentForwardEl } from '@/app/shared/utils/forward-el';
import type { VNode, ObjectDirective, Directive } from 'vue';
import type { Data } from '@/app/shared/types';
import type {
  _DirectiveBinding,
  DirectiveModifier
} from '@/app/shared/types/component/directive';

type ElArgument = HTMLElement;

// type BindingArgument = DirectiveBinding<ElArgument>;
type BindingArgument = _DirectiveBinding<ElArgument>;

type VNodeArgument = VNode<any, ElArgument>;

type DirectiveOption = {
  value?: any;
  argument?: string;
  modifiers?: DirectiveModifier<string>;
};

type DirectiveHookOption = {
  created?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  beforeMount?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  mounted?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  beforeUpdate?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ) => void;

  updated?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ) => void;

  beforeUnmount?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  unmounted?: (
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ) => void;

  getSSRProps?: (binding: BindingArgument, vnode: VNode) => Data | undefined;
};

type DirectiveDeepOption = {
  deep?: boolean;
};

type DirectiveName = {
  name: Readonly<string>;
};

type DirectiveRegisterFunction = {
  register: () => {
    /*
      we have to use "any" ((DirectiveHookOption & DirectiveDeepOption) | any)
      instead of "DirectiveHookOption & DirectiveDeepOption"
      otherwise type "directives?: Record<string, Directive>;" from "ComponentOptionsBase" will throw error
    */
    [name: string]: (DirectiveHookOption & DirectiveDeepOption) | any;
  };
};

type DirectiveUseFunction = {
  use: (directiveOption?: DirectiveOption) => any[];
  // use: (directiveOption?: DirectiveOption) => Directive<any, any>;
};

type VFocusDirectiveObject = DirectiveHookOption &
  DirectiveDeepOption &
  DirectiveName &
  DirectiveRegisterFunction &
  DirectiveUseFunction;

export const vFocusDirective: VFocusDirectiveObject = {
  name: 'focus',

  deep: false,

  created(el, binding, vnode, prevVNode) {
    //
  },

  beforeMount(el, binding, vnode, prevVNode) {
    //
  },

  mounted(el, binding, vnode, prevVNode) {
    const element = findComponentForwardEl(el) || el;

    console.group();
    // console.log(
    //   'mounted forward-el of el:',
    //   // @ts-ignore
    //   findForwardElement(el.__vnode)
    // );
    // console.log('mounted forward-el of el:', { forwardEl });
    // console.log('mounted el:', el, { el });
    console.log('"mounted" element', element);
    console.groupEnd();

    element.focus();
  },

  beforeUpdate(el, binding, vnode, prevVNode) {
    //
  },

  updated(el, binding, vnode, prevVNode) {
    //
  },

  beforeUnmount(el, binding, vnode, prevVNode) {
    //
  },

  unmounted(el, binding, vnode, prevVNode) {
    //
  },

  getSSRProps(binding, vnode) {
    return undefined;
  },

  register() {
    const { register, use, name, ...directiveHook } = this;

    return {
      [name]: directiveHook
    };
  },

  use(directiveOption) {
    const { register, use, name, ...directiveHook } = this;

    const directive = [
      directiveHook,
      directiveOption?.value,
      directiveOption?.argument,
      directiveOption?.modifiers
    ];

    // return directive as Directive<any, any>;
    return directive;
  }
};
