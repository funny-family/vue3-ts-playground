import type {
  DefaultSlot,
  CustomSlot
} from '@/app/shared/types/component/slots';
import type { VSlots } from '@/app/shared/types/directives';
import type { SuspenseProps, VNode, VNodeProps, VNodeTypes } from 'vue';
import { Suspense as _Suspense } from 'vue';

namespace SuspenseSlots {
  export interface Schema<R> extends DefaultSlot<R> {
    fallback?: CustomSlot<undefined, R>;
  }

  export type VNodeList = Readonly<Schema<VNode[]>>;

  export type JSXElement = Readonly<Schema<JSX.Element>>;

  export type VNodeType = Readonly<Schema<VNodeTypes>>;
}

export const Suspense = _Suspense as {
  new (): {
    $props: VNodeProps &
      SuspenseProps &
      VSlots.Directive<SuspenseSlots.JSXElement | SuspenseSlots.VNodeType>;
  };
};
