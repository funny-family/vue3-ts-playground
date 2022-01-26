import type { EmitsOptions, SetupContext } from 'vue';
import type { SetupCtx } from '@/app/shared/types';
import type { TextFieldAttrs, TextFieldProps } from './text-field.props';
import { TextFieldEmits, emitName } from './text-field.emits';

export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
  const props = p as Readonly<TextFieldProps>;
  const context = ctx as unknown as SetupCtx<
    TextFieldEmits.AsFunctionArguments,
    TextFieldAttrs
  >;

  const onInput = (event: Event): void => {
    let value = (event.target as HTMLInputElement).value;

    if (props.modelModifiers?.capitalize) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    context.emit(emitName.updateModelValue, value);
  };

  return {
    props,
    context,
    onInput
  };
};

export type TextFieldBindings = ReturnType<typeof setup>;
