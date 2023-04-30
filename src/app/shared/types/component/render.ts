import type { VNodeTypes, ComponentPublicInstance } from 'vue';
import type { Data, JSXElement } from '@/app/shared/types';

type D = Data<undefined>;

type RenderFunctionReturnValue = VNodeTypes | JSXElement;

export type RenderFunction<
  This,
  Ctx = D,
  Cache = any[],
  $Props = D,
  $Setup = This,
  $Data = D,
  $Options = any
> = (
  this: This & ComponentPublicInstance,
  ctx: Ctx & ComponentPublicInstance,
  cache: Cache,
  $props: $Props,
  $setup: $Setup,
  $data: $Data,
  $options: $Options
) => RenderFunctionReturnValue;
