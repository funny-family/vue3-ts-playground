import type { VNodeTypes } from 'vue';
import { setBlockTracking } from 'vue';

type Node = VNodeTypes | JSX.Element;

interface ArgumentsOfRenderOnceFunction {
  renderFunctionArguments: IArguments;
  cacheSlot: number;
  node: Node;
}

/**
 * @deprecated
 *
 * @private
 *
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
export const renderOnce = (cache: any[], cacheSlot: number, node: Node) => {
  return (
    cache[cacheSlot] ||
    (setBlockTracking(-1),
    (cache[cacheSlot] = node),
    setBlockTracking(1),
    cache[cacheSlot])
  );

  // const cachedNode =
  //   cache || (setBlockTracking(-1), (cache = node), setBlockTracking(1), cache);

  // const doesCacheHaveWrongOrder = cache.includes(undefined);
  // if (doesCacheHaveWrongOrder) {
  //   const message = `Cache cannot have an "empty" elements. The order must be 0, 1, 2, 3, 4... etc. You use "${cacheSlot}".`;

  //   throw new Error(message);
  // }

  // return cachedNode;
};
