// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import { getCurrentInstance, ref, withScopeId } from 'vue';
import type { Gif404Props, Gif404Attrs } from './gif-404.props';
import type { Gif404Emits } from './gif-404.emits';
import { generateGuid } from '@/app/shared/utils/guid';
import { SetupCtx } from '@/app/shared/types';

// Omit<Gif404Attrs, 'class'> & { class: string }

// export const setup = (
//   props: Readonly<LooseRequired<Readonly<Readonly<Gif404Props>>>>,
//   context: SetupContext<Gif404Emits>
// ) => {
export const setup = (
  props: Readonly<Gif404Props>,
  context: SetupCtx<Gif404Emits, Gif404Attrs>
) => {
  // export const setup = (props: Gif404Props, context: SetupContext<Gif404Emits>) => {
  // export const setup = (props: Gif404Props, context: SetupCtx<Gif404Emits, Gif404Attrs>) => {
  const title = 'Not found page!';
  const isImageVisible = ref(true);

  console.log('Gif404 context:', context.attrs);

  const c = context.attrs.class;

  // console.log(isImageVisible.value);

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

export type Gif404RawBindings = ReturnType<typeof setup>;

// export type RawBindings = ReturnType<typeof setup>;
