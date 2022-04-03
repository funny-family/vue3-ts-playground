import type { VNodeTypes } from 'vue';
import { setBlockTracking } from 'vue';

type Node = VNodeTypes | JSX.Element;

interface ArgumentsOfRenderOnceFunction {
  renderFunctionArguments: IArguments;
  cacheSlot: number;
  node: Node;
}

/**
 * @see https://vuejs.org/api/built-in-directives.html#v-once
 *
 * @description
 * Render the element and component once only, and skip future updates. (function version of "v-once" directive for JSX)
 *
 * @example
 * ...
 * render() {
 *   return (
 *     ...
 *       <div>
 *         {renderOnce({
 *           renderFunctionArguments: arguments,
 *           cacheSlot: 0,
 *           node: <h1>I'll be render only once!</h1>
 *         })}
 *       </div>
 *     ...
 *   );
 * }
 * ...
 */
// export const renderOnce = ({
//   renderFunctionArguments,
//   cacheSlot,
//   node
// }: ArgumentsOfRenderOnceFunction): Node => {
// export const renderOnce = (
//   renderFunctionArguments: IArguments,
//   cacheSlot: number,
//   node: Node
// ): Node => {
export const renderOnce = ({
  cache,
  cacheSlot,
  node
}: {
  cache: any;
  cacheSlot: number;
  node: Node;
}): Node => {
  // const cache = renderFunctionArguments[1];
  // const cache = renderFunctionArguments as any;

  const cachedNode =
    cache[cacheSlot] ||
    (setBlockTracking(-1),
    (cache[cacheSlot] = node),
    setBlockTracking(1),
    cache[cacheSlot]);

  // const cachedNode =
  //   cache || (setBlockTracking(-1), (cache = node), setBlockTracking(1), cache);

  // const doesCacheHaveWrongOrder = cache.includes(undefined);
  // if (doesCacheHaveWrongOrder) {
  //   const message = `Cache cannot have an "empty" elements. The order must be 0, 1, 2, 3, 4... etc. You use "${cacheSlot}".`;

  //   throw new Error(message);
  // }

  return cachedNode;
};
