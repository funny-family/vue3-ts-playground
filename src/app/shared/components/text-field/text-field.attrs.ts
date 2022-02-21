import type { InputHTMLAttributes } from 'vue';
import type {
  HTMLAttributesWithClassAttributeAsString,
  WithoutVModelAttr
} from '@/app/shared/types/component/attrs';

export type TextFieldAttrs = WithoutVModelAttr<
  HTMLAttributesWithClassAttributeAsString<InputHTMLAttributes>
>;
