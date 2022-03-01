import type { VNode, VNodeTypes } from 'vue';
import type { Data } from '@/app/shared/types';

type D = Data<undefined>;

type RenderFunctionReturnValue = VNodeTypes | JSX.Element;

export type RenderFunction<
  This,
  Ctx = D,
  Cache = VNode[],
  $Props = D,
  $Setup = D,
  $Data = D,
  $Options = D
> = (
  this: This,
  ctx: Ctx,
  cache: Cache,
  $props: $Props,
  $setup: $Setup,
  $data: $Data,
  $options: $Options
) => RenderFunctionReturnValue;
