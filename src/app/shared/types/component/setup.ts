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
