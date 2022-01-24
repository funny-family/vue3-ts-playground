---
to: <%= absPath %>/<%= componentNameInCableCase %>.emits.ts
---
import { enumify } from '@/app/shared/utils/enumify';
import type { EmitsToProps, EmitValidationFunction } from '@/app/shared/types';

export namespace <%= componentNameInCamelCase %>Emits {
  export type Schema = {};

  export type Keys = keyof Schema;

  export type AsFunctionArguments = Schema;

  export type AsProps = EmitsToProps<Schema>;
}

export const emits: <%= componentNameInCamelCase %>Emits.Schema = {};

export const emitName = {
  ...enumify(Object.keys(emits) as [<%= componentNameInCamelCase %>Emits.Keys])
};
