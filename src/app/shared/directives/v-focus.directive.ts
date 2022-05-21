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
  DirectiveUseFunction & { [key: string]: any };

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

  get directiveObject() {
    const obj: any = {};

    const {
      deep,
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      beforeUnmount,
      unmounted,
      getSSRProps
    } = this;

    if (deep !== undefined) {
      obj['deep'] = deep;
    }

    if (created !== undefined) {
      obj[created.name] = created;
    }

    if (beforeMount !== undefined) {
      obj[beforeMount.name] = beforeMount;
    }

    if (mounted !== undefined) {
      obj[mounted.name] = mounted;
    }

    if (beforeUpdate !== undefined) {
      obj[beforeUpdate.name] = beforeUpdate;
    }

    if (updated !== undefined) {
      obj[updated.name] = updated;
    }

    if (beforeUnmount !== undefined) {
      obj[beforeUnmount.name] = beforeUnmount;
    }

    if (unmounted !== undefined) {
      obj[unmounted.name] = unmounted;
    }

    if (getSSRProps !== undefined) {
      obj[getSSRProps.name] = getSSRProps;
    }

    return obj;
  },

  register() {
    const { register, use, name, directiveObject, ...directiveHook } = this;
    console.log('directiveObject:', directiveObject);

    return {
      [name]: directiveHook
    };
  },

  use(directiveOption) {
    const { register, use, name, directiveObject, ...directiveHook } = this;

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
