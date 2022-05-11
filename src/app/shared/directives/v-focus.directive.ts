import type { VNode, ObjectDirective } from 'vue';
import type { Data } from '@/app/shared/types';
import type {
  _DirectiveBinding,
  DirectiveModifier
} from '@/app/shared/types/component/directive';

type OD<T = ObjectDirective> = {
  [Property in keyof T]: any;
};

type ODL = keyof ObjectDirective;

type ElArgument = HTMLElement;

// type BindingArgument = DirectiveBinding<ElArgument>;
type BindingArgument = _DirectiveBinding<ElArgument>;

type VNodeArgument = VNode<any, ElArgument>;

type DirectiveOption = {
  value?: any;
  argument?: string;
  modifiers?: DirectiveModifier<string>;
};

// class VFocusDirective {
//   readonly name = 'focus';
//   readonly deep = false;

//   created(
//     el: ElArgument,
//     binding: BindingArgument,
//     vnode: VNodeArgument,
//     prevVNode: null
//   ): void {
//     //
//   }

//   beforeMount(
//     el: ElArgument,
//     binding: BindingArgument,
//     vnode: VNodeArgument,
//     prevVNode: null
//   ): void {
//     //
//   }

//   mounted(
//     el: ElArgument,
//     binding: BindingArgument,
//     vnode: VNodeArgument,
//     prevVNode: null
//   ): void {
//     console.log(34535435, el);

//     el.focus();
//   }

//   beforeUpdate(
//     el: ElArgument,
//     binding: BindingArgument,
//     vnode: VNodeArgument,
//     prevVNode: VNode<any, ElArgument>
//   ): void {
//     //
//   }

//   updated(
//     el: ElArgument,
//     binding: BindingArgument,
//     vnode: VNodeArgument,
//     prevVNode: VNode<any, ElArgument>
//   ): void {
//     //
//   }

//   beforeUnmount(
//     el: ElArgument,
//     binding: BindingArgument,
//     vnode: VNodeArgument,
//     prevVNode: null
//   ): void {
//     //
//   }

//   unmounted(
//     el: ElArgument,
//     binding: BindingArgument,
//     vnode: VNodeArgument,
//     prevVNode: null
//   ): void {
//     //
//   }

//   getSSRProps(binding: BindingArgument, vnode: VNode): Data | undefined {
//     return undefined;
//   }

//   register() {
//     const { register, use, name, ...directiveHook } = this;

//     return {
//       [name]: directiveHook
//     };
//   }

//   use(directiveOption?: DirectiveOption) {
//     const { register, use, name, ...directiveHook } = this;

//     console.log(345353, Object.getPrototypeOf(this));

//     // [directive, value, argument, modifiers]
//     const directiveArray = [];

//     directiveArray[0] = directiveHook;

//     if (directiveOption?.value !== undefined) {
//       directiveArray[1] = directiveOption?.value;
//     }

//     if (directiveOption?.argument !== undefined) {
//       directiveArray[2] = directiveOption?.argument;
//     }

//     if (directiveOption?.modifiers !== undefined) {
//       directiveArray[3] = directiveOption?.modifiers;
//     }

//     return directiveArray;
//   }
// }

// export const vFocusDirective = new VFocusDirective();

export const vFocusDirective: OD & { name: string } & { register: Function } & {
  use: Function;
} = {
  name: 'focus',

  deep: false,

  created(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  },

  beforeMount(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  },

  mounted(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    console.log(34535435, el);

    el.focus();
  },

  beforeUpdate(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ): void {
    //
  },

  updated(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ): void {
    //
  },

  beforeUnmount(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  },

  unmounted(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  },

  // getSSRProps(binding: BindingArgument, vnode: VNode): Data | undefined {
  //   return undefined;
  // },

  register() {
    const { register, use, name, ...directiveHook } = this;

    return {
      [name]: directiveHook
    };
  },

  use(directiveOption?: DirectiveOption) {
    const { register, use, name, ...directiveHook } = this;

    // console.log(345353, Object.getPrototypeOf(this));

    // [directive, value, argument, modifiers]
    const directiveArray = [];

    directiveArray[0] = directiveHook;

    if (directiveOption?.value !== undefined) {
      directiveArray[1] = directiveOption?.value;
    }

    if (directiveOption?.argument !== undefined) {
      directiveArray[2] = directiveOption?.argument;
    }

    if (directiveOption?.modifiers !== undefined) {
      directiveArray[3] = directiveOption?.modifiers;
    }

    return directiveArray;
  }
};

// https://github.com/vuejs/rfcs/issues/258

console.group();
console.log('vFocusDirective:', vFocusDirective);
console.log('vFocusDirective, "name":', vFocusDirective);
console.log('vFocusDirective "use":', vFocusDirective.use());
console.groupEnd();
