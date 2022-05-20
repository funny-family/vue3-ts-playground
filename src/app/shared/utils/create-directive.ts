import type { VNode, ObjectDirective, Directive, DirectiveArguments } from 'vue';
import type { RequireAtLeastOne } from '@/app/shared/types';
// import type { DirectiveRegisterFunction } from '@/app/shared/types/component/directive';

// /*
//   V = value/oldValue, A = arg, M = modifiers, D = any
// */
// export interface _DirectiveBinding<
//   V = any,
//   A = string,
//   M = DirectiveModifier<string>,
//   D = any
// > {
//   instance: ComponentPublicInstance<Data, Data, Data> | null;
//   value: V;
//   oldValue: V | null;
//   arg?: A;
//   modifiers: M;
//   dir: ObjectDirective<D, V>;
// }

type DirectiveRegisterFunction = () => Record<string, Directive>;

type DirectiveUseFunction = (directiveArgument?: {
  value?: any;
  argument?: string;
  modifiers?: Record<string, unknown>;
}) => DirectiveArguments;

/**
 * @see https://vuejs.org/guide/reusability/custom-directives.html#introduction
 *
 * @description
 * adada
 *
 * @example
 * adad
 */
export const createDirective = <
  ObjectDirectiveTypeSchema extends ObjectDirective
>(
  name: Readonly<string>,
  directiveObject: RequireAtLeastOne<ObjectDirectiveTypeSchema>
) => {
  const register: DirectiveRegisterFunction = () => ({
    [name]: directiveObject
  });

  const use: DirectiveUseFunction = (directiveArgument) => [
    directiveObject,
    directiveArgument?.value,
    directiveArgument?.argument,
    directiveArgument?.modifiers
  ];

  return {
    register,
    use
  };
};

const vSomething = createDirective('something', {
  deep: false
});
