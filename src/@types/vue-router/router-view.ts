import type { CustomSlot } from '@/app/shared/types/component/slots';
import type { VSlots } from '@/app/shared/types/directives';
import type {
  AllowedComponentProps,
  ComponentCustomProps,
  VNode,
  VNodeProps
} from 'vue';
import type {
  RouteLocationNormalizedLoaded,
  RouterViewProps
} from 'vue-router';
import { RouterView as _RouterView } from 'vue-router';

namespace RouterViewSlots {
  export interface Schema<R> {
    default: CustomSlot<
      { Component: VNode; route: RouteLocationNormalizedLoaded },
      R
    >;
  }

  export type VNodeList = Readonly<Schema<VNode[]>>;

  export type JSXElement = Readonly<Schema<JSX.Element>>;
}

/**
 * Component to display the current route the user is at.
 */
export const RouterView = _RouterView as new () => {
  $props: AllowedComponentProps &
    ComponentCustomProps &
    VNodeProps &
    RouterViewProps &
    VSlots.Directive<RouterViewSlots.JSXElement>;
  $slots: RouterViewSlots.VNodeList;
};
