import type { TextFieldUnwrappedBindings } from './text-field.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
import type { TextFieldInstance } from './text-field.ref';
import { styles } from './styles/text-field.styles';

export const render: RenderFunction<TextFieldUnwrappedBindings> = function () {
  const { props, context, onInput, $, shallowObj, deepObj } = this;
  const uid = $.uid;
  const value = props.modelValue || '';

  return (
    <div class={styles.textField} data-component-root-el-id={uid}>
      {props.label !== undefined && (
        <label class={styles.textField__label}>{props.label}</label>
      )}

      <input
        {...context.attrs}
        class={styles.textField__input}
        type="text"
        value={value}
        onInput={onInput}
        data-component-forward-el-id={uid}
      />
    </div>
  );
};
