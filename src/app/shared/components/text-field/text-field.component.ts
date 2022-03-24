import { defineComponent } from 'vue';
import { setup, TextFieldBindings } from './text-field.setup';
import { props, TextFieldProps } from './text-field.props';
import { emits, TextFieldEmits } from './text-field.emits';
import { render } from './text-field.render';
import type { VModel } from './text-field.binding-data';
import type { TextFieldAttrs } from './text-field.attrs';
import { nameOf } from '@/app/shared/utils/name-of';

export const TextField = defineComponent<
  TextFieldProps & TextFieldAttrs & TextFieldEmits.AsProps & VModel.Directive,
  TextFieldBindings
>({});

// @ts-expect-error
TextField.name = nameOf(() => TextField);
TextField.inheritAttrs = false;
TextField.setup = setup;
TextField.props = props;
TextField.emits = emits;
TextField.render = render;
