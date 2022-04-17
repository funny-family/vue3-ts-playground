// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import type {
  ContextOfSetupFunction,
  PropsOfSetupFunction
} from '@/app/shared/types/component/setup';

type Context = ContextOfSetupFunction;
type Props = PropsOfSetupFunction;

export const setup = (props: Props, context: Context) => {
  return {
    props,
    context
  };
};

export type AppBindings = ReturnType<typeof setup>;
