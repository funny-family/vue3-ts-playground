// https://vue3js.cn/es6/typeScript.html
// https://github.com/vuejs/composition-api/issues/191
// separate setup????? https://github.com/vuejs/composition-api/issues/650
// https://mrcrmn.dev/articles/lightweight-components-with-vue3-and-jsx/

import { getCurrentInstance, ref, SetupContext, withScopeId } from 'vue';
import type { Gif404Props } from './gif-404.props';
import type { Gif404Emits } from './gif-404.emits';
import { generateGuid } from '@/utils/guid';
import { getNormalizedRouteRecordByName } from '@/router/utils';
import { names } from '@/router/routes/names';

export const setup = (props: Gif404Props, ctx: SetupContext<Gif404Emits>) => {
  const title = 'Not found page!';
  const isImageVisible = ref(true);

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
    title,
    isImageVisible,
    withId
  };
};

// export type RawBindings = ReturnType<typeof setup>;
