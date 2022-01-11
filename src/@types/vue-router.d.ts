import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }

  /**
   * Component to display the current route the user is at.
   */
  declare const RouterView: new () => {
    // $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & RouterViewProps;
    $props: any;
    $slots: {
        default: (arg: {
            Component: VNode;
            route: RouteLocationNormalizedLoaded;
        }) => VNode[];
    };
  };
}
