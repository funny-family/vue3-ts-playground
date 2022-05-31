import { withDirectives as _withDirectives, openBlock } from 'vue';
import type { DirectiveArguments, VNode } from 'vue';

/**
 * @see https://vuejs.org/api/render-function.html#withdirectives
 *
 * @description
 * For adding custom directives to vnodes.
 *
 * @example
 * import { h, withDirectives } from 'vue';
 *
 * // a custom directive
 * const pin = {
 *   mounted() {
 *     // ...
 *   },
 *   updated() {
 *     // ...
 *   },
 * };
 *
 * // <div v-pin:top.animate="200"></div>
 * const vnode = withDirectives(h('div'), [
 *   [pin, 200, 'top', { animate: true }]
 * ])
 */
export const withDirectives = <T extends VNode>(
  vnode: T,
  directives: DirectiveArguments
) => _withDirectives((openBlock(), vnode), directives);
