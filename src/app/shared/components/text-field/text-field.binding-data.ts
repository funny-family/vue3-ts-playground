import {
  VModelArgument,
  defaultVModelArgumentName
} from '@/app/shared/utils/v-model-argument';
import { VModelModifier } from '@/app/shared/utils/v-model-modifier';
import type { DefaultVModelArgumentName } from '@/app/shared/utils/v-model-argument';
import type { VModel as VM } from '@/app/shared/types/directives';

export namespace VModel {
  export type Type = string;

  export namespace Argument {
    export namespace ModelValue {
      export type Type = string;
      const name: DefaultVModelArgumentName = defaultVModelArgumentName;

      export const { propName, propObject, nameOfEmit, normalizedNameOfEmit } =
        new VModelArgument<DefaultVModelArgumentName, Type>({
          name,
          defaultValue: ''
        });
    }
  }

  export namespace Modifier {
    export type Directive = 'capitalize';

    export const { propName, propObject } = new VModelModifier();
  }

  export type Directive = VM.Directive<Type, string, Modifier.Directive>;
}
