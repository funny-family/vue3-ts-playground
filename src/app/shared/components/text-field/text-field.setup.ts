import type { EmitsOptions, SetupContext } from 'vue';
import type {
  CSSClassAsString,
  HTMLAttributesWithoutCSSClass,
  SetupCtx
} from '@/app/shared/types';
import type { TextFieldAttrs, TextFieldProps } from './text-field.props';
import type { TextFieldEmits } from './text-field.emits';

export const setup = (p: Readonly<{}>, ctx: SetupContext<EmitsOptions>) => {
  const props = p as Readonly<TextFieldProps>;
  const context = ctx as unknown as SetupCtx<
    TextFieldEmits,
    HTMLAttributesWithoutCSSClass<TextFieldAttrs> & CSSClassAsString
  >;

  return {
    props,
    context
  };
};

export type TextFieldBindings = ReturnType<typeof setup>;
