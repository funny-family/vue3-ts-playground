import type { SetupCtx } from '@/app/shared/types/component/setup';
import type { TextFieldProps } from './text-field.props';
import type { TextFieldAttrs } from './text-field.attrs';
import { TextFieldEmits, emitName } from './text-field.emits';
import { capitalize } from '@/app/shared/utils/capitalize';
import { isCapitalized } from '@/app/shared/utils/is-capitalized';

type Props = Readonly<TextFieldProps>;
type Context = SetupCtx<TextFieldEmits.AsFunctionArguments, TextFieldAttrs>;

export const setup = (props: Props, context: Context) => {
  const onInput = (event: Event): void => {
    let value = (event.target as HTMLInputElement).value;

    if (
      props.modelModifiers?.capitalize === true &&
      isCapitalized(value) === false
    ) {
      value = capitalize(value);
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
