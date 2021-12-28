import type { ExtractPropTypes } from '@vue/runtime-core';
import type { InputHTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '@/app/shared/types';
import { ModelValueProp, modelValueProp } from '@/app/shared/utils/model-value';

export interface TextFieldPropFields extends ModelValueProp {}

export const props: RecordPropsDefinition<TextFieldPropFields> = {
  ...modelValueProp
};

export type TextFieldProps = ExtractPropTypes<typeof props> & ThisType<void>;

export type TextFieldAttrs = InputHTMLAttributes;
