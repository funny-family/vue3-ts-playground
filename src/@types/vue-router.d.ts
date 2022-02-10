import 'vue-router';
import type { UnwrapRef, VNode } from 'vue';


declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }

  /**
   * Component to display the current route the user is at.
   */
  export declare const RouterView: new () => {
    // $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & RouterViewProps;
    $props: any;
    $slots: {
      default: (arg: {
        Component: VNode;
        route: RouteLocationNormalizedLoaded;
      }) => VNode[];
    };
  };

  /**
   * Component to render a link that triggers a navigation on click.
   */
  export declare const RouterLink: {
    new (): {
      // $props: AllowedComponentProps &
      //   ComponentCustomProps &
      //   VNodeProps &
      //   RouterLinkProps;
      $props: any;
      $slots: {
        default: (arg: UnwrapRef<ReturnType<typeof useLink>>) => VNode[];
      };
    };
    /**
     * Access to `useLink()` without depending on using vue-router
     *
     * @internal
     */
    useLink: typeof useLink;
  };
}
