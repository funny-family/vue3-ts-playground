import type {
  ExtractTypeFromProps,
  PropOption
} from '@/app/shared/types/component/props';
import type { LabelHTMLAttributes, InputHTMLAttributes } from 'vue';
import { VModel } from './text-field.binding-data';

interface TextFieldPropSchema {
  label: PropOption<LabelHTMLAttributes | undefined, false, undefined>;
  input: PropOption<InputHTMLAttributes | undefined, false, undefined>;
  [VModel.Argument.ModelValue.propName]: VModel.Argument.ModelValue.PropOption;
  [VModel.ModelModifier.propName]: VModel.ModelModifier.PropOption;
}

export const props: TextFieldPropSchema = {
  label: {
    type: Object,
    required: false
  },

  input: {
    type: Object,
    required: false
  },

  [VModel.Argument.ModelValue.propName]: {
    ...VModel.Argument.ModelValue.propObject
  },

  [VModel.ModelModifier.propName]: {
    ...VModel.ModelModifier.propObject
  }
};

export type TextFieldProps = ExtractTypeFromProps<TextFieldPropSchema>;
