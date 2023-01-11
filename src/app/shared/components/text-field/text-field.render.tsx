import type { TextFieldUnwrappedBindings } from './text-field.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
/**
 * @see https://segmentfault.com/a/1190000041616822
 */
import { normalizeClass } from 'vue';
import { styles } from './styles/text-field.styles';
import { createComponentDataAttrMarks } from '@/app/shared/utils/forward-el';

export const render: RenderFunction<TextFieldUnwrappedBindings> = function () {
  const { props, context, onInput, groupedAttrs, $, shallowObj, deepObj } =
    this;

  // const { class: classAttr, style, ...forwardElementAttrs } = context.attrs;
  const className = normalizeClass([
    groupedAttrs.html?.class,
    styles.textField
  ]);
  const type = groupedAttrs.el?.type || 'text';
  const value = props.modelValue;
  const uid = $.uid;

  const { rootElDataAttrs, forwardElDataAttrs } =
    createComponentDataAttrMarks(uid);

  return (
    <div
      {...rootElDataAttrs}
      {...groupedAttrs.html}
      {...groupedAttrs.aria}
      {...groupedAttrs.data}
      class={className}
    >
      {props.label != null && (
        <label class={styles.textField__label}>{props.label}</label>
      )}

      <input
        {...forwardElDataAttrs}
        {...groupedAttrs.el}
        {...groupedAttrs.event}
        class={styles.textField__input}
        type={type}
        value={value}
        onInput={onInput}
      />
    </div>
  );
};
