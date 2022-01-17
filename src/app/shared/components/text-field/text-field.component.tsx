import { defineComponent } from 'vue';
import { setup, TextFieldBindings } from './text-field.setup';
import { props, TextFieldProps, TextFieldAttrs } from './text-field.props';
import { styles } from './styles/text-field.styles';
import { emits, TextFieldEmits } from './text-field.emits';
import type {
  CSSClassAttribute,
  HTMLAttributesWithoutCSSClass
} from '@/app/shared/types';
import { nameOf } from '../../utils/name-of';
import type { VModel } from './text-field.binding-data';

export const TextField = defineComponent<
  TextFieldProps &
    HTMLAttributesWithoutCSSClass<TextFieldAttrs> &
    TextFieldEmits.AsProps &
    CSSClassAttribute &
    VModel.Directive,
  TextFieldBindings
>({
  name: nameOf(() => TextField),

  render() {
    const { props, context, onInput } = this;

    return (
      <fieldset class={styles.textField}>
        {props.label && (
          <label class={styles.textField__label}>{props.label}</label>
        )}
        <input
          {...context.attrs}
          class={styles.textField__input}
          type="text"
          value={props.modelValue}
          onInput={onInput}
        />
      </fieldset>
    );
  }
});

TextField.inheritAttrs = false;
TextField.setup = setup;
TextField.props = props;
TextField.emits = emits;
