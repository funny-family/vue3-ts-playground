import type { ExtractPropTypes } from '@vue/runtime-core';
import type { InputHTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '@/app/shared/types';

export interface TextFieldPropFields {
  modelValue: string;
}

export const props: RecordPropsDefinition<TextFieldPropFields> = {
  modelValue: {
    type: String,
    required: false,
    default: () => ''
  }
};

export type TextFieldProps = ExtractPropTypes<typeof props> & ThisType<void>;

export type TextFieldAttrs = InputHTMLAttributes;
