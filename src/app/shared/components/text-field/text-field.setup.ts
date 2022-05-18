import { ref, shallowRef } from 'vue';
import type { TextFieldProps } from './text-field.props';
import type { TextFieldAttrs } from './text-field.attrs';
import type { TextFieldEmits } from './text-field.emits';
import type {
  ContextOfSetupFunction,
  PropsOfSetupFunction,
  BindingsOfSetupFunction,
  UnwrappedBindingsOfSetupFunction
} from '@/app/shared/types/component/setup';
import type { EventHandler } from '@/app/shared/types';
import { emitName } from './text-field.emits';
import { capitalize } from '@/app/shared/utils/capitalize';
import { isStringContainsUppercaseCharacters } from '@/app/shared/utils/is-string-contains-uppercase-characters';

type Props = PropsOfSetupFunction<TextFieldProps>;
type Context = ContextOfSetupFunction<
  TextFieldEmits.AsFunctionArguments,
  TextFieldAttrs
>;

export const setup = (props: Props, context: Context) => {
  const shallowObj = shallowRef({
    one: 1,
    two: 2,
    three: 3
  });

  const deepObj = ref({
    one: {
      two: {
        three: {}
      }
    }
  });

  const onInput: EventHandler<Event> = (event) => {
    let value = (event.target as HTMLInputElement).value;

    const isCapitalizeModifierUsed = props.modelModifiers?.capitalize;
    const isFirstCharacterCapital = isStringContainsUppercaseCharacters(
      value[0]
    );
    if (
      isCapitalizeModifierUsed === true &&
      isFirstCharacterCapital === false
    ) {
      value = capitalize(value);
    }

    context.emit(emitName.updateModelValue, value);
  };

  return {
    props,
    context,
    onInput,
    shallowObj,
    deepObj
  };
};

export type TextFieldSetupFunction = typeof setup;
export type TextFieldBindings = BindingsOfSetupFunction<TextFieldSetupFunction>;
export type TextFieldUnwrappedBindings =
  UnwrappedBindingsOfSetupFunction<TextFieldSetupFunction>;
