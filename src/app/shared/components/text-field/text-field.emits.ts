import { enumify } from '@/app/shared/utils/enumify';
import type { EmitsToProps, EmitValidationFunction } from '@/app/shared/types';
import { VModel } from './text-field.binding-data';

// https://v3.vuejs.org/guide/migration/v-model.html#v-model-arguments
// https://v3.vuejs.org/guide/component-basics.html#using-v-model-on-components

// =============================================================================

export namespace TextFieldEmits {
  export type Schema = {
    [VModel.Argument.ModelValue.nameOfEmit]: EmitValidationFunction<VModel.Argument.ModelValue.Type>;
  };

  export type Keys = keyof Schema;

  export type AsFunctionArguments = Schema;

  export type AsProps = EmitsToProps<Schema>;
}

export const emits: TextFieldEmits.Schema = {
  [VModel.Argument.ModelValue.nameOfEmit]: (value) => {
    if (typeof value === 'string') return true;

    return false;
  }
};

export const emitName = {
  ...enumify(Object.keys(emits) as [TextFieldEmits.Keys]),
  ...{ [VModel.Argument.ModelValue.normalizedNameOfEmit]: VModel.Argument.ModelValue.nameOfEmit }
};
