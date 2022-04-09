import type { EmitsOptions, SetupContext, Slots } from 'vue';
import type { Data } from './../index';
import type { EmitFunction } from './emits';

// Extended "SetupContext" type.
export interface SetupCtx<E = EmitsOptions, A = Data, S = Slots>
  extends Omit<SetupContext<E>, 'attrs' | 'slots' | 'emit'> {
  attrs: A;
  slots: S;
  emit: EmitFunction<E>;
}

export type SetupFunction<Props = {}, Context = SetupCtx> = (
  props: Readonly<Props>,
  context: Context
) => {};

// function setup1(p, c): SetupFunction {
//   //
// }

// const setup2: SetupFunction = (p, c) => {
//   //
// };
