import type { VNodeTypes, ComponentPublicInstance } from 'vue';
import type { Data, JSXElement } from '@/app/shared/types';

type RenderFunctionReturnValue = VNodeTypes | JSXElement;

export type RenderFunction<
  This,
  $Context = This, // 0
  $Cache = any[], // 1
  $Props = Record<string, any>, // 2
  $Setup = This, // 3
  $Data = {}, // 4
  $Options = This // 5
> = (
  this: This & ComponentPublicInstance,
  ctx: $Context & ComponentPublicInstance, // 0
  cache: $Cache, // 1
  $props: $Props, // 2
  $setup: $Setup, // 3
  $data: $Data, // 4
  $options: $Options & ComponentPublicInstance // 5
) => RenderFunctionReturnValue;

type PublicInstanceOfComponent = {};
