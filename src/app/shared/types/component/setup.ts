import type {
  EmitsOptions,
  SetupContext,
  Slots,
  HTMLAttributes,
  ObjectEmitsOptions
} from 'vue';
import type { ShallowUnwrapRef } from '@vue/reactivity';
import type { Data, AnyFunction } from '@/app/shared/types';
import type { EmitFunction } from '@/app/shared/types/component/emits';

export type SetupPropsArg<T extends Record<string, unknown>> = Readonly<T>;

export type SetupContextArg<
  TAttrs extends Record<string, any>,
  TSlots extends Slots,
  TEmits extends ObjectEmitsOptions
> = Omit<SetupContext<TEmits>, 'attrs' | 'slots' | 'emit'> & {
  attrs: TAttrs;
  slots: TSlots;
  emit: EmitFunction<TEmits>;
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
