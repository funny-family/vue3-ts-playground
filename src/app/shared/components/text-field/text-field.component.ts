import type { TextFieldProps } from './text-field.props';
import type { TextFieldBindings } from './text-field.setup';
import type { TextFieldEmits } from './text-field.emits';
import type { VModel } from './text-field.binding-data';
import type { TextFieldAttrs } from './text-field.attrs';
import type { VShow, VSlots } from '@/app/shared/types/directives';
import type { TextFieldSlots } from './text-field.slots';
import { defineComponent } from 'vue';
import { setup } from './text-field.setup';
import { props } from './text-field.props';
import { emits } from './text-field.emits';
import { render } from './text-field.render';
import { nameOf } from '@/app/shared/utils/name-of';
import type { RequireOnlyOne } from '@/app/shared/types';

type Props = TextFieldProps &
  TextFieldAttrs &
  TextFieldEmits.AsProps &
  VShow.Directive &
  VModel.Directive &
  VSlots.Directive<TextFieldSlots.JSXElement>;
type RawBindings = TextFieldBindings;

export const TextField = defineComponent<Props, RawBindings>({});

(TextField.name as unknown) = nameOf(() => TextField);
TextField.inheritAttrs = false;
TextField.props = props;
TextField.emits = emits;
TextField.setup = setup;
TextField.render = render;
