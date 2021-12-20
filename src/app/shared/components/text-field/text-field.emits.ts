import type {
  EmitsToProps,
  EmitValidationFunction,
  Keys
} from '@/app/shared/types';

export namespace TextFieldEmits {
  export type Schema = {
    change: EmitValidationFunction<Event>;
    input: EmitValidationFunction<Event>;
    deleteById: EmitValidationFunction<{ id: number }>;
  };

  export type Keys = keyof Schema;

  export type AsFunctionArguments = Schema;

  export type AsProps = EmitsToProps<Schema>;
}

export const emits: TextFieldEmits.Schema = {
  change(event) {
    if (event) return true;

    return false;
  },

  input(event: Event) {
    if (event) return true;

    return false;
  },

  deleteById({ id }) {
    if (id) return true;

    return false;
  }
};

export const emitNames = (Object.keys(emits) as TextFieldEmits.Keys[]).reduce(
  (accumulator, currentValue) => {
    (accumulator[currentValue as TextFieldEmits.Keys] as any) = currentValue;

    return accumulator;
  },
  {} as Keys<TextFieldEmits.Keys>
);
