import type { EmitsToProps } from '@/app/shared/types';
import { enumify } from '@/app/shared/utils/enumify';
import {
  ModelValueEmitValidationFunction,
  modelValueEmitFunction,
  modelValue
} from '@/app/shared/utils/model-value';

// https://v3.vuejs.org/guide/migration/v-model.html#v-model-arguments
// https://v3.vuejs.org/guide/component-basics.html#using-v-model-on-components

// =============================================================================


export namespace TextFieldEmits {
  export type Schema = {} & ModelValueEmitValidationFunction;

  export type Keys = keyof Schema;

  export type AsFunctionArguments = Schema;

  export type AsProps = EmitsToProps<Schema>;
}

export const emits: TextFieldEmits.Schema = {
  ...modelValueEmitFunction
};

export const emitName = {
  ...enumify(Object.keys(emits) as [TextFieldEmits.Keys]),
  ...modelValue.normalizedEmitName
};
