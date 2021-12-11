import { defineComponent } from 'vue';
import { setup, TextFieldBindings } from './text-field.setup';
import { props, TextFieldProps, TextFieldAttrs } from './text-field.props';
import { styles } from './styles/text-field.styles';
import { emits } from './text-field.emits';
import type {
  CSSClassAsString,
  HTMLAttributesWithoutCSSClass
} from '@/app/shared/types';
import type { VModel } from '@/app/shared/types/directives';

export const TextField = defineComponent<
  TextFieldProps &
    HTMLAttributesWithoutCSSClass<TextFieldAttrs> &
    CSSClassAsString &
    VModel<string>,
  TextFieldBindings
>({
  get name(): string {
    return Object.keys({ TextField })[0];
  },

  render() {
    const { context } = this;

    return (
      <>
        <input {...context.attrs} class={styles.textField} type="text" />
      </>
    );
  }
});

TextField.inheritAttrs = false;
TextField.setup = setup;
TextField.props = props;
TextField.emits = emits;
