import { withDirectives as _withDirectives, openBlock } from 'vue';
import type { DirectiveArguments, VNode } from 'vue';

/**
 * @see https://vuejs.org/api/render-function.html#withdirectives
 *
 * @description
 * adada
 *
 * @example
 */
export const withDirectives = <T extends VNode>(
  vnode: T,
  directives: DirectiveArguments
) => _withDirectives((openBlock(), vnode), directives);
