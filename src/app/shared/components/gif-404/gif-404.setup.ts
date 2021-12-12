// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import { EmitsOptions, ref, SetupContext, withScopeId } from 'vue';
import type { Gif404Props, Gif404Attrs } from './gif-404.props';
import { generateGuid } from '@/app/shared/utils/guid';
import type {
  CSSClassAttribute,
  HTMLAttributesWithoutCSSClass,
  SetupCtx
} from '@/app/shared/types';
import type { Gif404Slots } from './gif-404.slots';

export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
  const props = p as Readonly<Gif404Props>;
  const context = ctx as unknown as SetupCtx<
    EmitsOptions,
    HTMLAttributesWithoutCSSClass<Gif404Attrs> & CSSClassAttribute,
    Gif404Slots.VNodeList
  >;

  const title = 'Not found page!';
  const isImageVisible = ref(true);

  console.log('Gif404 context:', context.attrs);

  const c = context.attrs.class;

  const componentId = generateGuid();
  const withId = withScopeId(componentId);

  return {
    props,
    context,
    c,
    title,
    isImageVisible,
    withId
  };
};

export type Gif404Bindings = ReturnType<typeof setup>;
