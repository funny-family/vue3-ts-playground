import type { EmitsToProps, EmitValidationFunction } from '@/app/shared/types';
import { enumify } from '@/app/shared/utils/enumify';

// https://v3.vuejs.org/guide/migration/v-model.html#v-model-arguments

/**
 * @see
 * https://v3.vuejs.org/guide/migration/v-model.html#migration-strategy
 *
 * @see
 * https://v3.vuejs.org/guide/migration/v-model.html#v-model-arguments
 *
 * @description
 * v-model. Overview
 */

// =============================================================================

export const updateModuleValue = 'update:moduleValue';

export namespace TextFieldEmits {
  export type Schema = {
    [updateModuleValue]: EmitValidationFunction<string>;
  };

  export type Keys = keyof Schema;

  export type AsFunctionArguments = Schema;

  export type AsProps = EmitsToProps<Schema>;
}

export const emits: TextFieldEmits.Schema = {
  [updateModuleValue](value) {
    if (typeof value !== 'string') return false;

    return true;
  }
};

export const emitNames = enumify(Object.keys(emits) as [TextFieldEmits.Keys]);
