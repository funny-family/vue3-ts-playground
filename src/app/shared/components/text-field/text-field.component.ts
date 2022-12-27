import type { TextFieldProps } from './text-field.props';
import type { TextFieldBindings } from './text-field.setup';
import type { TextFieldEmits } from './text-field.emits';
import type { VModel } from './text-field.binding-data';
import type { TextFieldAttrs, OmittedTextFieldAttrs } from './text-field.attrs';
import { defineComponent } from 'vue';
import { setup } from './text-field.setup';
import { props } from './text-field.props';
import { emits } from './text-field.emits';
import { render } from './text-field.render';
import { nameOf } from '@/app/shared/utils/name-of';

type Props = TextFieldProps &
  OmittedTextFieldAttrs &
  TextFieldEmits.AsProps &
  VModel.Directive;
type RawBindings = TextFieldBindings;

export const TextField = defineComponent<Props, RawBindings>({});

// @ts-expect-error
TextField.name = nameOf(() => TextField);
TextField.inheritAttrs = false;
TextField.setup = setup;
TextField.props = props;
TextField.emits = emits;
TextField.render = render;
