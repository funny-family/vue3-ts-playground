import type { ExtractPropTypes } from '@vue/runtime-core';
import type { InputHTMLAttributes } from 'vue';
import type { RecordPropsDefinition } from '@/app/shared/types';
import { VModel } from './text-field.binding-data';
import type { RecordOfBoolean } from '@/app/shared/types';

export interface TextFieldPropFields {
  [VModel.Argument.ModelValue.propName]: VModel.Argument.ModelValue.Type;
  [VModel.Modifier.propName]: RecordOfBoolean<VModel.Modifier.Directive>;
  label: string;
}

export const props: RecordPropsDefinition<TextFieldPropFields> = {
  [VModel.Argument.ModelValue.propName]: {
    ...VModel.Argument.ModelValue.propObject
  },

  [VModel.Modifier.propName]: {
    ...VModel.Modifier.propObject
  },

  label: {
    type: String,
    required: false,
    default: ''
  }
};

export type TextFieldProps = ExtractPropTypes<typeof props> & ThisType<void>;

export type TextFieldAttrs = InputHTMLAttributes;
