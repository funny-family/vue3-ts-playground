import type { ObjectDirective } from 'vue';

interface CustomDirectiveName {
  name: string;
}

type DirectiveUseFunction<T extends unknown> = {
  use: (directiveOption?: T) => any[];
};

// export class CustomDirective<DO extends unknown>
//   implements CustomDirectiveName, DirectiveUseFunction<DO>, ObjectDirective
// {
//   get name() {
//     throw new Error('"name" field is required!');

//     return '';
//   }

//   use() {}
// }
