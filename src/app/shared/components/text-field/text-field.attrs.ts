import type { InputHTMLAttributes } from 'vue';
import type { CSSClassAttribute } from '@/app/shared/types/component/attrs';
import type { ExtractedKeys } from '@/app/shared/types';
import type { VModel } from '@/app/shared/types/directives';

export type TextFieldAttrs = Omit<
  InputHTMLAttributes,
  ExtractedKeys<VModel.Directive & CSSClassAttribute>
> &
  CSSClassAttribute;
