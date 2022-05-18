import type { TextFieldUnwrappedBindings } from './text-field.setup';
import type { TextFieldProps } from './text-field.props';
import type { ComponentPublicInstance } from 'vue';

export type TextFieldRef = TextFieldProps &
  TextFieldUnwrappedBindings &
  ComponentPublicInstance;
