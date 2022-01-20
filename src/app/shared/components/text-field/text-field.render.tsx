import type { TextFieldBindings } from './text-field.setup';
import { styles } from './styles/text-field.styles';

export const render = function (this: TextFieldBindings) {
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
};
