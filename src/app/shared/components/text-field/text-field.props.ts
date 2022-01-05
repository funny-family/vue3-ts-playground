import type { ExtractPropTypes } from '@vue/runtime-core';
import type { InputHTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '@/app/shared/types';
import { ModelValue } from './text-field.binding-argument';

export interface TextFieldPropFields {
  [ModelValue.propName]: ModelValue.Type;
}

export const props: RecordPropsDefinition<TextFieldPropFields> = {
  [ModelValue.propName]: {
    ...ModelValue.propObject
  }
};

export type TextFieldProps = ExtractPropTypes<typeof props> & ThisType<void>;

export type TextFieldAttrs = InputHTMLAttributes;
