/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const filePath: string;
  export default content;
}

declare module '*.jpeg' {
  const filePath: string;
  export default content;
}

declare module '*.svg' {
  const filePath: string;
  export default filePath;
}

declare module '*.svg?inline' {
  import type { DefineComponent, SVGAttributes } from 'vue';
  const component: new () => {
    $props: SVGAttributes;
  };
  export default component;
}
