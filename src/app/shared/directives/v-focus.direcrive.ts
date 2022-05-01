import type { VNode } from 'vue';
import type { Data } from '@/app/shared/types';
import type { _DirectiveBinding } from '@/app/shared/types/component/directive';

type ElArgument = HTMLElement;

// type BindingArgument = DirectiveBinding<ElArgument>;
type BindingArgument = _DirectiveBinding<ElArgument>;

type VNodeArgument = VNode<any, ElArgument>;

type PrevVNodeArgument = VNode<any, HTMLElement> | null;

export class VFocusDirective {
  deep = false;

  created(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: PrevVNodeArgument
  ) {
    //
  }

  beforeMount(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: PrevVNodeArgument
  ) {
    //
  }

  mounted(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: PrevVNodeArgument
  ) {
    el.focus();
  }

  beforeUpdate(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: PrevVNodeArgument
  ) {
    //
  }

  updated(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: PrevVNodeArgument
  ) {
    //
  }

  beforeUnmount(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: PrevVNodeArgument
  ) {
    //
  }

  unmounted(
    el: ElArgument,
    binding: BindingArgument,
    vnode: VNodeArgument,
    prevVNode: PrevVNodeArgument
  ) {
    //
  }

  getSSRProps(binding: BindingArgument, vnode: VNode): Data | undefined {
    return undefined;
  }
}

const vFocusDirective = new VFocusDirective();
