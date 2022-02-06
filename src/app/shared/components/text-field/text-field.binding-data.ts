import {
  VModelArgument,
  defaultVModelArgumentName
} from '@/app/shared/utils/v-model-argument';
import type { RecordOfBoolean } from '@/app/shared/types';
import { VModelModifier } from '@/app/shared/utils/v-model-modifier';
import type { DefaultVModelArgumentName } from '@/app/shared/utils/v-model-argument';
import type { PropOption as _PropOption } from '@/app/shared/types/component/props';
import type { VModel as _VModel } from '@/app/shared/types/directives';

export namespace VModel {
  export type Type = string;

  export namespace Argument {
    export namespace ModelValue {
      export type Type = string;
      export type PropOption = _PropOption<Type, false, Type>;

      export const { propName, propObject, nameOfEmit, normalizedNameOfEmit } =
        new VModelArgument<DefaultVModelArgumentName, Type>({
          name: defaultVModelArgumentName,
          defaultValue: ''
        });

      export type Modifier = 'capitalize';
    }
  }

  export namespace ModelModifier {
    // list of modifiers
    export type ModifierList = Argument.ModelValue.Modifier;
    type ModifierRecord = RecordOfBoolean<ModifierList>;
    export type PropOption = _PropOption<ModifierRecord, false, ModifierRecord>;

    export const { propName, propObject } = new VModelModifier<ModifierList>();
  }

  export type Directive = _VModel.Directive<
    Type,
    string,
    ModelModifier.ModifierList
  >;
}
