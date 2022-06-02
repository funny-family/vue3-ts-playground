import type { TextFieldUnwrappedBindings } from './text-field.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
import { styles } from './styles/text-field.styles';
import { mergeStrings } from '@/app/shared/utils/merge-strings';

export const render: RenderFunction<TextFieldUnwrappedBindings> = function () {
  const { props, context, onInput, $, shallowObj, deepObj } = this;
  const { class: classAttr, style: styleAttr, ...restAttrs } = context.attrs;
  const uid = $.uid;
  const className = mergeStrings(classAttr, styles.textField);
  const style = styleAttr;
  const value = props.modelValue;

  return (
    <div class={className} style={style} data-component-root-el-id={uid}>
      {props.label != null && (
        <label class={styles.textField__label}>{props.label}</label>
      )}

      <input
        {...restAttrs}
        class={styles.textField__input}
        type="text"
        value={value}
        onInput={onInput}
        data-component-forward-el-id={uid}
      />
    </div>
  );
};
