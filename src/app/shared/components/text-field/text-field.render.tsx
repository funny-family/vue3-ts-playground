import type { TextFieldUnwrappedBindings } from './text-field.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
/**
 * @see https://segmentfault.com/a/1190000041616822
 */
import { normalizeClass } from 'vue';
import { styles } from './styles/text-field.styles';
import { createComponentMarkWithDataAttrs } from '@/app/shared/utils/forward-el';

export const render: RenderFunction<TextFieldUnwrappedBindings> = function () {
  const { props, context, onInput, groupedAttrs, $, shallowObj, deepObj } =
    this;

  // const {
  //   aria: ariaAttrs,
  //   data: dataAttrs,
  //   el: {
  //     checked,
  //     list,
  //     accept,
  //     capture,
  //     width,
  //     height,
  //     alt,
  //     src,
  //     max,
  //     min,
  //     step,
  //     ...elAttrs
  //   },
  //   event: eventAttrs,
  //   html: { innerHTML, draggable, contenteditable, radiogroup, ...htmlAttrs }
  // } = groupedAttrs;

  const { rootElDataAttrs, forwardElDataAttrs } =
    createComponentMarkWithDataAttrs($.uid);

  return (
    <div
      {...rootElDataAttrs}
      {...groupedAttrs.aria}
      {...groupedAttrs.data}
      class={normalizeClass([groupedAttrs.html.class, styles.textField])}
      style={groupedAttrs.html?.style}
    >
      {props.label != null && (
        <label class={styles.textField__label}>{props.label}</label>
      )}

      <input
        {...forwardElDataAttrs}
        {...eventAttrs}
        class={styles.textField__input}
        type={elAttrs.type || 'text'}
        value={props.modelValue || elAttrs.value}
        onInput={onInput}
      />
    </div>
  );
};
