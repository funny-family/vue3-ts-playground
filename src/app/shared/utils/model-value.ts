import type { EmitValidationFunction, RecordPropsDefinition } from '@/app/shared/types';

// https://v3.vuejs.org/guide/component-custom-events.html#multiple-v-model-bindings

export const modelValue = {
  name: 'modelValue',
  emitName: 'update:modelValue',
  normalizedEmitName: {
    updateModelValue: 'update:modelValue'
  }
} as const;

/**
 * @example
 * import type { EmitsToProps } from './path/to/types';
 *
 * // "TextField" component example (emits file)
 * export namespace TextFieldEmits {
 *   export type Schema = {} & ModelValueEmitValidationFunction;
 *
 *   export type Keys = keyof Schema;
 *
 *   export type AsFunctionArguments = Schema;
 *
 *   export type AsProps = EmitsToProps<Schema>;
 * }
 */
export type ModelValueEmitValidationFunction = {
  [modelValue.emitName]: EmitValidationFunction<string>;
};

/**
 * @example
 * // "TextField" component example (emits file)
 * export const emits: TextFieldEmits.Schema = {
 *   ...modelValueEmitFunction
 * };
 */
export const modelValueEmitFunction: ModelValueEmitValidationFunction = {
  [modelValue.emitName](value) {
    if (typeof value !== 'string') return false;

    return true;
  }
};

/**
 * @example
 * // "TextField" component example (props file)
 * export interface TextFieldPropFields extends ModelValueProp {}
 */
export type ModelValueProp = {
  [modelValue.name]: string;
};

/**
 * @example
 * import type { RecordPropsDefinition } from './path/to/types';
 *
 * // "TextField" component example (props file)
 * export const props: RecordPropsDefinition<TextFieldPropFields> = {
 *   ...modelValueProp
 * };
 */
export const modelValueProp: RecordPropsDefinition<ModelValueProp> = {
  [modelValue.name]: {
    type: String,
    required: false,
    default: () => ''
  }
};
