import type { VNode, ObjectDirective } from 'vue';
import type { Data } from '@/app/shared/types';
import type { _DirectiveBinding } from '@/app/shared/types/component/directive';

type OD<T = ObjectDirective> = {
  [Property in keyof T]: any;
};

type ElArgument = HTMLElement;

// type BindingArgument = DirectiveBinding<ElArgument>;
type BindingArgument = _DirectiveBinding<ElArgument>;

type VNodeArgument = VNode<any, ElArgument>;

export class VFocusDirective {
  deep = false;

  created(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  }

  beforeMount(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  }

  mounted(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    el.focus();
  }

  beforeUpdate(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ): void {
    //
  }

  updated(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: VNode<any, ElArgument>
  ): void {
    //
  }

  beforeUnmount(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  }

  unmounted(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: null
  ): void {
    //
  }

  getSSRProps(binding: BindingArgument, vnode: VNode): Data | undefined {
    return undefined;
  }

  use(): OD {
    const { use, ...directiveHook } = this;

    return directiveHook;
  }
}

const vFocusDirective = new VFocusDirective();
