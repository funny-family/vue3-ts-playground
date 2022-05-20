import type { ComponentPublicInstance } from 'vue';
import type { TextFieldProps } from './text-field.props';
import type { ExtractedKeys } from '@/app/shared/types';
import type { TextFieldEmits } from './text-field.emits';
import type { TextFieldAttrs } from './text-field.attrs';
import type {
  TextFieldUnwrappedBindings,
  TextFieldBindings,
  TextFieldExposes
} from './text-field.setup';
import type {
  AttrsOfComponentPublicInstance,
  ELOfComponentPublicInstance,
  EmitOfComponentPublicInstance,
  PropsOfComponentPublicInstance,
  SlotsOfComponentPublicInstance
} from '@/app/shared/types/component';

export type TextFieldInstance = Omit<
  ComponentPublicInstance<TextFieldProps, TextFieldBindings>,
  ExtractedKeys<
    AttrsOfComponentPublicInstance &
      ELOfComponentPublicInstance &
      EmitOfComponentPublicInstance &
      PropsOfComponentPublicInstance &
      SlotsOfComponentPublicInstance
  >
> &
  AttrsOfComponentPublicInstance<TextFieldAttrs> &
  ELOfComponentPublicInstance<HTMLElement> &
  EmitOfComponentPublicInstance<TextFieldEmits.AsFunctionArguments> &
  PropsOfComponentPublicInstance<TextFieldProps> &
  TextFieldUnwrappedBindings;

type TextFieldPublicInstance = ComponentPublicInstance<
  TextFieldProps,
  TextFieldBindings
>;

// export type TextFieldRef = TextFieldProps &
//   TextFieldUnwrappedBindings &
//   ComponentPublicInstance;

export type TextFieldRef = TextFieldExposes;
