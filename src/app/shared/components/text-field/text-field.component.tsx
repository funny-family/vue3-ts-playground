import { defineComponent } from 'vue';
import { setup, TextFieldBindings } from './text-field.setup';
import { props, TextFieldProps, TextFieldAttrs } from './text-field.props';
import { styles } from './styles/text-field.styles';
import { emits, TextFieldEmits } from './text-field.emits';
import type {
  CSSClassAttribute,
  HTMLAttributesWithoutCSSClass
} from '@/app/shared/types';
import type { VModel } from '@/app/shared/types/directives';
import { nameOf } from '../../utils/name-of';

export const TextField = defineComponent<
  TextFieldProps &
    HTMLAttributesWithoutCSSClass<TextFieldAttrs> &
    TextFieldEmits.AsProps &
    CSSClassAttribute &
    VModel<string>,
  TextFieldBindings
>({
  name: nameOf(() => TextField),

  render() {
    const { context, onInput } = this;

    return (
      <>
        <input
          {...context.attrs}
          class={styles.textField}
          type="text"
          // onInput={onInput}
          onChange={onInput}
        />
      </>
    );
  }
});

TextField.inheritAttrs = false;
TextField.setup = setup;
TextField.props = props;
// TextField.emits = emits;
TextField.emits = ['onUpdate:modelValue'];
