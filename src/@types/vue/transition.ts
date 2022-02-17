import type { DefaultSlot } from '@/app/shared/types/component/slots';
import type { VSlots } from '@/app/shared/types/directives';
import type {
  FunctionalComponent,
  TransitionProps,
  VNode,
  VNodeTypes
} from 'vue';
import { Transition as _Transition } from 'vue';

namespace TransitionSlots {
  export interface Schema<R> extends DefaultSlot<R> {}

  export type VNodeList = Readonly<Schema<VNode[]>>;

  export type JSXElement = Readonly<Schema<JSX.Element>>;

  export type VNodeType = Readonly<Schema<VNodeTypes>>;
}

export const Transition = _Transition as FunctionalComponent<
  TransitionProps &
    VSlots.Directive<TransitionSlots.JSXElement | TransitionSlots.VNodeType>
>;
