// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import {
  EmitsOptions,
  getCurrentInstance,
  ref,
  SetupContext,
  withScopeId
} from 'vue';
import type { Gif404Props, Gif404Attrs } from './gif-404.props';
import type { Gif404Emits } from './gif-404.emits';
import { generateGuid } from '@/app/shared/utils/guid';
import type { SetupCtx } from '@/app/shared/types';
import type { Gif404Slots } from './gif-404.slots';

// export const setup = (
//   props: Readonly<Gif404Props>,
//   context: SetupCtx<Gif404Emits, Gif404Attrs>
// ) => {
/* ----------------------------------------------------------------------------------- */
// export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
//   const props = p as Readonly<Gif404Props>;
//   const context = ctx as unknown as SetupCtx<
//     Gif404Emits,
//     Gif404Attrs,
//     Gif404Slots.VNodeList
//   >;
/* ----------------------------------------------------------------------------------- */
export const setup = (
  props: Readonly<Gif404Props>,
  context: SetupCtx<Gif404Emits, Gif404Attrs, Gif404Slots.VNodeList>
) => {
  /* ----------------------------------------------------------------------------------- */

  const title = 'Not found page!';
  const isImageVisible = ref(true);

  console.log('Gif404 context:', context.attrs);

  const c = context.attrs.class;

  const instance = getCurrentInstance();
  // console.log('uid:', instance?.uid);

  // console.log(
  //   getNormalizedRouteRecordByName({
  //     availableName: 'notFound'
  //   })
  // );

  // https://zhuanlan.zhihu.com/p/267343741

  // const scopeId = instance?.type.__isBuiltIn;

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

// export type RawBindings = ReturnType<typeof setup>;
