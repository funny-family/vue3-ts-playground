import { enumify } from '@/app/shared/utils/enumify';
import type { EmitsToProps, EmitValidationFunction } from '@/app/shared/types';
import { ModelValue } from './text-field.binding-argument';

// https://v3.vuejs.org/guide/migration/v-model.html#v-model-arguments
// https://v3.vuejs.org/guide/component-basics.html#using-v-model-on-components

// =============================================================================

export namespace TextFieldEmits {
  export type Schema = {
    [ModelValue.emitName]: EmitValidationFunction<ModelValue.Type>;
  };

  export type Keys = keyof Schema;

  export type AsFunctionArguments = Schema;

  export type AsProps = EmitsToProps<Schema>;
}

export const emits: TextFieldEmits.Schema = {
  [ModelValue.emitName]: (value) => {
    if (typeof value === 'string') return true;

    return false;
  }
};

export const emitName = {
  ...enumify(Object.keys(emits) as [TextFieldEmits.Keys]),
  ...{ [ModelValue.normalizedEmitName]: ModelValue.emitName }
};
