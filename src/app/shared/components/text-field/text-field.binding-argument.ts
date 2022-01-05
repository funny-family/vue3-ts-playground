import {
  VModelBindingArgument,
  DefaultNameOfBindingArgument,
  defaultNameOfBindingArgument
} from '@/app/shared/utils/model-binding-argument';

export namespace ModelValue {
  export type Type = string;

  export const { emitName, normalizedEmitName, propName, propObject } =
    new VModelBindingArgument<DefaultNameOfBindingArgument, Type>(
      defaultNameOfBindingArgument,
      ''
    );
}
