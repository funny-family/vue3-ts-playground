import { defineComponent } from 'vue';
import { setup, TextFieldBindings } from './text-field.setup';
import { props, TextFieldProps } from './text-field.props';
import { emits, TextFieldEmits } from './text-field.emits';
import { render } from './text-field.render';
import { nameOf } from '../../utils/name-of';
import type { VModel } from './text-field.binding-data';
import type { TextFieldAttrs } from './text-field.attrs';

export const TextField = defineComponent<
  TextFieldProps & TextFieldAttrs & TextFieldEmits.AsProps & VModel.Directive,
  TextFieldBindings
>({});

// @ts-ignore
TextField.name = nameOf(() => TextField);
TextField.inheritAttrs = false;
TextField.setup = setup;
TextField.props = props;
TextField.emits = emits;
TextField.render = render;
