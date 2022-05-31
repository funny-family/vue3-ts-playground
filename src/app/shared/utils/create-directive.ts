import type { Directive, DirectiveArguments } from 'vue';
import type { RequireAtLeastOne, UnpackedArray } from '@/app/shared/types';
import type {
  DirectiveModifier,
  DirectiveOption
} from '@/app/shared/types/component/directive';

type DirectiveRegisterFunction = () => Record<string, Directive>;

type DirectiveUseFunction<
  V = any,
  A extends string = '',
  M extends string = ''
> = (
  directiveArgument?: Partial<
    (V extends undefined ? {} : { value: V }) &
      (A extends '' ? {} : { arg: A }) &
      (M extends '' ? {} : { modifiers: DirectiveModifier<M> })
  >
) => UnpackedArray<DirectiveArguments>;

/**
 * @see https://vuejs.org/guide/reusability/custom-directives.html#introduction
 *
 * @description
 * Util function that allows to create directives.
 *
 * @example
 * type VFontDirectiveModifier = 'normal' | 'italic' | 'oblique';
 *
 * export const vFontDirective = createDirective<
 *  HTMLElement,
 *  number,
 *  '',
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
  DirectiveElement extends Element = HTMLElement,
  DirectiveValue extends any = any,
  DirectiveArg extends string = '',
  DirectiveModifier extends string = ''
>(
  name: Readonly<string>,
  directiveObject: RequireAtLeastOne<
    DirectiveOption<
      DirectiveElement,
      DirectiveValue,
      DirectiveArg,
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
    ] as any;

  return {
    register,
    use
  };
};
