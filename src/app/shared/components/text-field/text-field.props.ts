import type { RecordOfBoolean } from '@/app/shared/types';
import type {
  ExtractTypeFromProps,
  PropOption
} from '@/app/shared/types/component/props';
import { VModel } from './text-field.binding-data';

interface TextFieldPropSchema {
  label: PropOption<string, false, ''>;
  [VModel.Argument.ModelValue.propName]: PropOption<
    VModel.Argument.ModelValue.Type,
    false,
    VModel.Argument.ModelValue.Type
  >;
  [VModel.ModelModifier.propName]: PropOption<
    RecordOfBoolean<VModel.ModelModifier.Modifier>,
    false,
    RecordOfBoolean<VModel.ModelModifier.Modifier>
  >;
}

export const props: TextFieldPropSchema = {
  label: {
    type: String,
    required: false,
    default: ''
  },

  [VModel.Argument.ModelValue.propName]: {
    ...VModel.Argument.ModelValue.propObject
  },

  [VModel.ModelModifier.propName]: {
    ...VModel.ModelModifier.propObject
  }
};

export type TextFieldProps = ExtractTypeFromProps<TextFieldPropSchema>;
