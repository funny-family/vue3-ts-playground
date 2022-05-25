import type {
  VNode,
  ObjectDirective,
  Directive,
  DirectiveArguments
} from 'vue';
import type { RequireAtLeastOne } from '@/app/shared/types';
import type {
  DirectiveModifier,
  DirectiveOption
} from '@/app/shared/types/component/directive';

// =================================================================
// type D<V, A, M> = V extends void
//   ? {
//       arg: A;
//       mod: M;
//     }
//   : A extends void
//   ? {
//       val: A;
//       mod: M;
//     }
//   : M extends void
//   ? {
//       val: A;
//       arg: A;
//     }
//   : {
//     val: A;
//     arg: A;
//     mod: M;
//   };

// const d: D<void, '1' | '2' | '3', 'one' | 'two' | 'three'> = {

// };
// =================================================================

type DirectiveRegisterFunction = () => Record<string, Directive>;

// type DirectiveUseFunctionArgument<V = any, A = string, M = {}> = V extends void
//   ? {
//       arg: A;
//       modifiers: M;
//     }
//   : A extends void
//   ? {
//       value: A;
//       modifiers: M;
//     }
//   : M extends void
//   ? {
//       val: A;
//       arg: A;
//     }
//   : {
//       value: A;
//       arg: A;
//       modifiers: M;
//     };

// type R = DirectiveUseFunctionArgument<any, string, {}>;

// type DirectiveUseFunction<V = any, A = string, M extends string = string> = (
//   directiveArgument?: Partial<{
//     value: V;
//     arg: A;
//     modifiers: DirectiveModifier<M>;
//   }>
// ) => DirectiveArguments;

type DirectiveUseFunction<V = any, A = string, M extends any = string> = (
  directiveArgument?: Partial<{
    value: V;
    arg: A;
    // @ts-expect-error <-- I gave up here ;(
    modifiers: M extends void ? void : DirectiveModifier<M>;
  }>
) => DirectiveArguments;

/**
 * @see https://vuejs.org/guide/reusability/custom-directives.html#introduction
 *
 * @description
 * adada
 *
 * @example
 * type VFontDirectiveModifier = 'normal' | 'italic' | 'oblique';
 *
 * export const vFontDirective = createDirective<
 *  HTMLElement,
 *  number,
 *  void,
 *  VFontDirectiveModifier
 * >('font', {
 *   beforeMount(el, binding) {
 *     if (binding.modifiers.normal === true) {
 *       el.style.fontStyle = 'normal';
 *     } else if (binding.modifiers.italic === true) {
 *       el.style.fontStyle = 'italic';
 *     } else if (binding.modifiers.oblique === true) {
 *       el.style.fontStyle = 'oblique';
 *     }
 *
 *     el.style.fontSize = `${binding.value}px`;
 *   },
 *
 *   updated(el, binding) {
 *     el.style.fontSize = `${binding.value}px`;
 *   },
 * });
 *
 * ...
 *
 * SomeComponent.directives = {
 *   ...vFontDirective.register()
 * };
 *
 * ...
 *  {withDirectives(<h1>Heading</h1>, [
 *     vFontDirective.use({
 *       value: 40,
 *       modifiers: {
 *         italic: true
 *       }
 *     })
 *   ])}
 * ...
 */
export const createDirective = <
  DirectiveElement extends HTMLElement = HTMLElement,
  DirectiveValue = any,
  DirectiveArg = string,
  DirectiveModifier extends any = string
>(
  name: Readonly<string>,
  directiveObject: RequireAtLeastOne<
    DirectiveOption<
      DirectiveElement,
      DirectiveValue,
      DirectiveArg,
      // @ts-expect-error <-- And here too ;(
      DirectiveModifier
    >
  >
) => {
  const register: DirectiveRegisterFunction = () =>
    ({
      [name]: directiveObject
    } as any);

  const use: DirectiveUseFunction<
    DirectiveValue,
    DirectiveArg,
    DirectiveModifier
  > = (directiveArgument) =>
    [
      directiveObject,
      directiveArgument?.value,
      directiveArgument?.arg,
      directiveArgument?.modifiers
    ] as any[];

  return {
    register,
    use
  };
};
