import type { EmitsToProps } from '@/app/shared/types';

export const emits = {
  change(event: Event) {
    if (event) return true;

    return false;
  },

  input(event: Event) {
    if (event) return true;

    return false;
  },

  deleteById(id: number) {
    if (id) return true;

    return false;
  }
};

export namespace TextFieldEmits {
  type Schema = typeof emits;

  export type Keys = keyof Schema;

  export type AsFunctionArguments = Schema;

  export type AsProps = EmitsToProps<Schema>;
}

export const emitNames = Object.keys(emits).reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue as TextFieldEmits.Keys] = currentValue;

    return accumulator;
  },
  {} as Record<TextFieldEmits.Keys, string>
);
