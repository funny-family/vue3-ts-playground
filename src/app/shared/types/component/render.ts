import type { VNodeTypes, ComponentPublicInstance } from 'vue';
import type { Data } from '@/app/shared/types';

type D = Data<undefined>;

type RenderFunctionReturnValue = VNodeTypes | JSX.Element;

export type RenderFunction<
  This,
  Ctx = D,
  Cache = any[],
  $Props = D,
  $Setup = This,
  $Data = D,
  $Options = any
> = (
  this: This,
  ctx: Ctx & ComponentPublicInstance,
  cache: Cache,
  $props: $Props,
  $setup: $Setup,
  $data: $Data,
  $options: $Options
) => RenderFunctionReturnValue;
