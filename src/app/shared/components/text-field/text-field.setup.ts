import type { EmitsOptions, SetupContext } from 'vue';
import type {
  CSSClassAttribute,
  HTMLAttributesWithoutCSSClass,
  SetupCtx
} from '@/app/shared/types';
import type { TextFieldAttrs, TextFieldProps } from './text-field.props';
import { emitNames, TextFieldEmits } from './text-field.emits';

export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
  const props = p as Readonly<TextFieldProps>;
  const context = ctx as unknown as SetupCtx<
    // EmitsOptions,
    TextFieldEmits.AsFunctionArguments,
    HTMLAttributesWithoutCSSClass<TextFieldAttrs> & CSSClassAttribute
  >;

  // Events

  const onInput = (event: Event): void => {
    // const inputValue = (event.target as HTMLInputElement).value;
    // console.log('"TextField" value inside:', inputValue);
    console.log('"TextField" event inside:', event);

    context.emit(emitNames.input, event);
  };

  return {
    props,
    context,
    onInput
  };
};

export type TextFieldBindings = ReturnType<typeof setup>;
