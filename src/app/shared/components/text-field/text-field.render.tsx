import type { TextFieldBindings } from './text-field.setup';
import type { RenderFunction } from '@/app/shared/types/component/render';
/**
 * @see https://segmentfault.com/a/1190000041616822
 */
import { normalizeClass } from 'vue';
import { styles } from './styles/text-field.styles';
import { createComponentDataAttrMarks } from '@/app/shared/utils/forward-el';

// ctx, cache, props, setup, data, options
export const render: RenderFunction<TextFieldBindings> = function (
  ctx,
  cache,
  $props,
  $setup,
  $data,
  $options
) {
  // const { props, context, onInputInput, $, shallowObj, deepObj } = this;

  console.log(
    '"this" of "TextField" component inside "render" function:',
    this
  );

  console.log(
    '"arguments" of "TextField" component inside "render" function:',
    // @ts-ignore
    // eslint-disable-next-line
    arguments
  );

  const { rootElDataAttrs, forwardElDataAttrs } = createComponentDataAttrMarks(
    ctx.$.uid
  );

  return (
    <div
      {...rootElDataAttrs}
      {...ctx.context.attrs}
      class={normalizeClass([styles.textField, ctx.context.attrs?.class])}
      /* ----------------- omitted attrs ----------------- */
      contenteditable={undefined}
      /* ----------------- omitted attrs ----------------- */
    >
      {ctx.context.slots?.label != null && (
        <label
          {...ctx.props?.label}
          class={normalizeClass([
            styles.textField__label,
            this.props?.label?.class
          ])}
        >
          {ctx.context.slots.label()}
        </label>
      )}

      <input
        {...forwardElDataAttrs}
        // todo fix order!
        onInput={ctx.onInputInput}
        {...ctx.props?.input}
        class={normalizeClass([
          styles.textField__input,
          ctx.props?.input?.class
        ])}
        type={ctx.props?.input?.type || 'text'}
        value={ctx.props?.input?.value || ctx.props.modelValue}
      />
    </div>
  );
};
