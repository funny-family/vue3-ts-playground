// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import type { EmitsOptions, SetupContext } from 'vue';

export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
  const props = p;
  const context = ctx;

  return {
    props,
    context
  };
};

export type AppBindings = ReturnType<typeof setup>;
