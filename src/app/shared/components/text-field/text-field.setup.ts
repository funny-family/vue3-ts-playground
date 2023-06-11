import { ref, shallowRef, ShallowUnwrapRef } from 'vue';
import type { InputHTMLAttributes, HTMLAttributes } from 'vue';
import type { TextFieldProps } from './text-field.props';
import type { TextFieldAttrs } from './text-field.attrs';
import type { TextFieldEmits } from './text-field.emits';
import type {
  SetupContextArg,
  SetupPropsArg
} from '@/app/shared/types/component/setup';
import type { EventHandler } from '@/app/shared/types';
import { emitName } from './text-field.emits';
import { capitalize } from '@/app/shared/utils/capitalize';
import { isStringContainsUppercaseCharacters } from '@/app/shared/utils/is-string-contains-uppercase-characters';
import type { TextFieldSlots } from './text-field.slots';

type Props = SetupPropsArg<TextFieldProps>;
type Context = SetupContextArg<
  TextFieldAttrs,
  TextFieldSlots.VNodes,
  TextFieldEmits.AsFunctionArguments
>;

export const setup = (props: Props, context: Context) => {
  console.log('"TextField" context:', context);

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

  const onInputInput: EventHandler<Event> = (event) => {
    console.log(1);
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
    console.log(2);
  };

  const bindings = {
    props,
    context,
    onInputInput,
    shallowObj,
    deepObj
  };

  const exposes = {
    deepObj
  };

  context.expose(exposes);

  return bindings;
};

export type TextFieldBindings = ShallowUnwrapRef<ReturnType<typeof setup>>;
export type TextFieldExposes = Pick<TextFieldBindings, 'deepObj'>;
