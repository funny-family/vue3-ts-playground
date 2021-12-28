import type { EmitsOptions, SetupContext } from 'vue';
import type {
  CSSClassAttribute,
  HTMLAttributesWithoutCSSClass,
  SetupCtx
} from '@/app/shared/types';
import type { TextFieldAttrs, TextFieldProps } from './text-field.props';
import { TextFieldEmits, emitName } from './text-field.emits';

export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
  const props = p as Readonly<TextFieldProps>;
  const context = ctx as unknown as SetupCtx<
    TextFieldEmits.AsFunctionArguments,
    HTMLAttributesWithoutCSSClass<TextFieldAttrs> & CSSClassAttribute
  >;

  const onInput = (event: Event): void => {
    const inputValue = (event.target as HTMLInputElement).value;

    context.emit(emitName.updateModelValue, inputValue);
  };

  return {
    props,
    context,
    onInput
  };
};

export type TextFieldBindings = ReturnType<typeof setup>;
