import type { InputHTMLAttributes } from 'vue';
import type { CSSClassAttribute } from '@/app/shared/types/component/attrs';
import type { ExtractedKeys } from '@/app/shared/types';
import type { VModel } from '@/app/shared/types/directives';

export type TextFieldAttrs = Omit<
  InputHTMLAttributes,
  ExtractedKeys<VModel.Directive & CSSClassAttribute>
> &
  CSSClassAttribute;

export type OmittedTextFieldAttrs = Omit<
  TextFieldAttrs,
  // checkbox
  | 'checked'
  // | 'defaultChecked'
  | 'list'
  // file
  | 'accept'
  | 'capture'
  // image
  | 'width'
  | 'height'
  | 'alt'
  | 'src'
  // date/number
  | 'max'
  | 'min'
  | 'step'
  // global
  | 'innerHTML'
  | 'draggable'
  | 'contenteditable'
  | 'radiogroup'
>;
