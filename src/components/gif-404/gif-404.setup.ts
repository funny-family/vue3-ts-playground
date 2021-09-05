// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import { ref, SetupContext } from "vue";
import type { Gif404Props } from "./gif-404.props";
import type { Gif404Emits } from "./gif-404.emits";

export const setup = (
  props: Gif404Props,
  ctx: SetupContext<Gif404Emits>
) => {
  const title = "Not found page!";
  const isImageVisible = ref(true);

  return {
    title,
    isImageVisible,
  };
};

// export type RawBindings = ReturnType<typeof setup>;
