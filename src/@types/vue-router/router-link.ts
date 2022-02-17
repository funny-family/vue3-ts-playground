import type {
  AllowedComponentProps,
  UnwrapRef,
  ComponentCustomProps,
  VNode,
  VNodeProps
} from 'vue';
import type { RouterLinkProps, useLink } from 'vue-router';
import type { VSlots } from '@/app/shared/types/directives';
import type { CustomSlot } from '@/app/shared/types/component/slots';
import { RouterLink as _RouterLink } from 'vue-router';

namespace RouterLinkSlots {
  export interface Schema<R> {
    default: CustomSlot<UnwrapRef<ReturnType<typeof useLink>>, R>;
  }

  export type VNodeList = Readonly<Schema<VNode[]>>;

  export type JSXElement = Readonly<Schema<JSX.Element>>;
}

/**
 * Component to render a link that triggers a navigation on click.
 */
export const RouterLink = _RouterLink as {
  new (): {
    $props: AllowedComponentProps &
      ComponentCustomProps &
      VNodeProps &
      RouterLinkProps &
      VSlots.Directive<RouterLinkSlots.JSXElement>;
    $slots: RouterLinkSlots.VNodeList;
  };
  /**
   * Access to `useLink()` without depending on using vue-router
   *
   * @internal
   */
  useLink: typeof useLink;
};
