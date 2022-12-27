import type { EmitsOptions, SetupContext, Slots } from 'vue';
import type { ShallowUnwrapRef } from '@vue/reactivity';
import type { Data, AnyFunction } from '@/app/shared/types';
import type { EmitFunction } from '@/app/shared/types/component/emits';

// Extended "SetupContext" type.
export interface SetupCtx<
  E extends EmitsOptions,
  A extends Data,
  S extends Slots
> extends Omit<SetupContext<E>, 'attrs' | 'slots' | 'emit'> {
  attrs: A;
  slots: S;
  emit: EmitFunction<E>;
}

export type PropsOfSetupFunction<T = {}> = Readonly<T>;

export type ContextOfSetupFunction<
  E extends EmitsOptions,
  A extends Data,
  S extends Slots
> = SetupCtx<E> & {
  attrs: A;
  slots: S;
  emit: EmitFunction<E>;
};

/**
 * @example
 * export type ComponentUnwrappedBindings = UnwrappedBindingsOfSetupFunction<typeof setup>;
 */
export type UnwrappedBindingsOfSetupFunction<T extends AnyFunction> =
  ShallowUnwrapRef<ReturnType<T>>;

/**
 * @example
 * export type ComponentBindings = BindingsOfSetupFunction<typeof setup>;
 */
export type BindingsOfSetupFunction<T extends AnyFunction> = ReturnType<T>;
