import type { ExtractPropTypes } from '@vue/runtime-core';
import type { RecordPropsDefinition } from '@/app/shared/types';
import { VModel } from './text-field.binding-data';
import type { RecordOfBoolean } from '@/app/shared/types';

export interface TextFieldPropFields {
  [VModel.Argument.ModelValue.propName]: VModel.Argument.ModelValue.Type;
  [VModel.ModelModifier
    .propName]: RecordOfBoolean<VModel.ModelModifier.Modifier>;
  label: string;
}

export const props: RecordPropsDefinition<TextFieldPropFields> = {
  [VModel.Argument.ModelValue.propName]: {
    ...VModel.Argument.ModelValue.propObject
  },

  [VModel.ModelModifier.propName]: {
    ...VModel.ModelModifier.propObject
  },

  label: {
    type: String,
    required: false,
    default: ''
  }
};

export type TextFieldProps = ExtractPropTypes<typeof props>;
