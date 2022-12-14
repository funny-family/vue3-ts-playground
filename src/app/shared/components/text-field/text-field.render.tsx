import type { TextFieldUnwrappedBindings } from './text-field.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
/**
 * @see https://segmentfault.com/a/1190000041616822
 */
import { normalizeClass } from 'vue';
import { styles } from './styles/text-field.styles';
import { createComponentMarkWithDataAttrs } from '@/app/shared/utils/forward-el';

export const render: RenderFunction<TextFieldUnwrappedBindings> = function () {
  const { props, context, onInput, $, shallowObj, deepObj } = this;
  const { class: classAttr, style, ...forwardElementAttrs } = context.attrs;
  const className = normalizeClass([classAttr, styles.textField]);
  const type = forwardElementAttrs.type || 'text';
  const value = props.modelValue;
  const uid = $.uid;

  const { rootElDataAttrs, forwardElDataAttrs } =
    createComponentMarkWithDataAttrs(uid);

  return (
    <div {...rootElDataAttrs} class={className} style={style}>
      {props.label != null && (
        <label class={styles.textField__label}>{props.label}</label>
      )}

      <input
        {...forwardElDataAttrs}
        {...forwardElementAttrs}
        class={styles.textField__input}
        type={type}
        value={value}
        onInput={onInput}
      />
    </div>
  );
};
