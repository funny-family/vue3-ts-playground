// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import { EmitsOptions, ref, SetupContext, withScopeId } from 'vue';
import type { ShallowUnwrapRef } from 'vue';
import type { Gif404Props } from './gif-404.props';
import type { Gif404Attrs } from './gif-404.attrs';
import type {
  SetupContextArg,
  SetupPropsArg
} from '@/app/shared/types/component/setup';
import type { Gif404Slots } from './gif-404.slots';
import { generateGuid } from '@/app/shared/utils/guid';

type Props = SetupPropsArg<Gif404Props>;
type Context = SetupContextArg<Gif404Attrs, Gif404Slots.VNodes, {}>;

export const setup = (props: Props, context: Context) => {
  // const props = p as Readonly<Gif404Props>;
  // const context = ctx as unknown as SetupCtx<
  //   Gif404Attrs,
  //   Gif404Slots.VNodeList,
  //   EmitsOptions
  // >;

  const title = 'Not found page!';
  const isImageVisible = ref(true);

  // console.log('Gif404 context:', context.attrs);

  const c = context.attrs.class;

  const componentId = generateGuid();
  const withId = withScopeId(componentId);

  const bindings = {
    props,
    context,
    c,
    title,
    isImageVisible,
    withId
  };

  const exposes = {};

  context.expose(exposes);

  return bindings;
};

export type Gif404Bindings = ShallowUnwrapRef<ReturnType<typeof setup>>;
export type Gif404Exposes = {};
