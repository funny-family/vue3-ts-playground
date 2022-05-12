import type { TextFieldBindings } from './text-field.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
import { styles } from './styles/text-field.styles';

export const render: RenderFunction<TextFieldBindings> = function () {
  const { props, context, onInput, $ } = this;
  console.log('TextField $:', $);
  const uid = $.uid;

  return (
    <div class={styles.textField} data-component-root-el-id={uid}>
      {props.label !== undefined && (
        <label class={styles.textField__label}>{props.label}</label>
      )}

      <input
        {...context.attrs}
        class={styles.textField__input}
        type="text"
        value={props.modelValue}
        onInput={onInput}
        data-component-forward-el-id={uid}
      />
    </div>
  );
};
