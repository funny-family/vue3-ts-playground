import type { ObjectDirective } from 'vue';

// type CustomDirectiveConstructor = {
//   name: string;
// };

// interface CustomDirectiveInterface<T = any, V = any>
//   extends ObjectDirective<T, V>,
//     CustomDirectiveConstructor {}

// export class CustomDirective<T = any, V = any>
//   implements CustomDirectiveInterface<T, V>
// {
//   name: CustomDirectiveConstructor['name'];

//   constructor(name: CustomDirectiveConstructor['name']) {
//     this.name = name;
//   }
// }

interface CustomDirectiveName {
  name: string;
}

interface CustomDirectiveUseFunction {
  use: Function;
}

export class CustomDirective implements CustomDirectiveName {
  name = '';
}
